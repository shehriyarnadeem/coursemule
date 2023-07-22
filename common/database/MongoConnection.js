const mongoose = require('mongoose');

const connectDB = async () => {
    try {
     await mongoose.createConnection()
     await mongoose.connect('mongodb+srv://root:admin@coursedigger.4q3qybn.mongodb.net/test');
      console.log('MongoDB connected!');
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  };
  
  module.exports = connectDB;