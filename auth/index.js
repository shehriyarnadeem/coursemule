const UserModel = require('../models/users');
const LoginStrategy = require('./LoginStrategy');



//Serialize user with passport using hes/her email

module.exports = function(passport){
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//Deserialize user with passport using hes/her email
passport.deserializeUser( async function(id, done) {
  try{
  const user = await UserModel.findById(id).lean();
  done(null, user);
}catch(err){
  done(err, null)
}
}
);

//Requiring Login - Register strategy files
// const LoginStrategy = require("./LoginStrategy");
const RegisterStrategy = require("./RegisterStrategy");
const LoginStrategy = require("./LoginStrategy");
//Using the above
// passport.use("local-login", LoginStrategy);
passport.use("local-register", RegisterStrategy);
passport.use("local-login", LoginStrategy);
return passport;
};