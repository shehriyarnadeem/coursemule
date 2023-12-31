const bodyParser = require('body-parser');
const courseRoutes = require('./routes/course');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const MongoStore = require('connect-mongo')
const { checkAuthenticatedUser } = require('./common/utils/helpers')
const express = require('express');
const session = require('express-session');
const connectDB = require('./common/database/MongoConnection')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path')
const multer = require('multer');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

var debug = require('debug')('backend-node:server');

// Connect with Mongo DB
let startDb = null;
if(!startDb){
    console.log('Connecting with Mongo DB...')
}
startDb =  connectDB();
const passport = require("passport");

// Initialize session middleware
// Parse JSON bodies
const upload = multer();
app.use(bodyParser.json());

// // Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.any()); // Use multer to handle multipart/form-data

// if(process.env.NODE_ENV==='production'){
  app.use(express.static('front/out'));
// }
// Set the allowed origin(s) - Replace '*' with your specific origin
const allowedOrigins = ['http://localhost:3000','https://coursemule-a65e519e93a4.herokuapp.com'];
const allowedHeaders = ['Authorization', 'Content-Type']; // Add more headers if needed

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', allowedHeaders.join(','));
  }
  next();
});


app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://root:admin@coursedigger.4q3qybn.mongodb.net/test' })
  })
);


app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

require("./auth")(passport);


// Set routes
app.use('/api', courseRoutes);
app.use('/api', authRoutes);
app.use('/api', checkAuthenticatedUser(), userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  debug('Listening on ' + port);
});

