const Strategy = require("passport-local").Strategy;
const UserModel = require("../models/users");

const SignupStrategy = new Strategy(
  { passReqToCallback:true, usernameField: "email" },
  async function async(req, email, password, done) {
    try{
    const user = await UserModel.findOne({ email }).lean()

        if (!user) {
          const { fullName } = req.body;

          let newUser = new UserModel({
            email,
            password,
            fullName,
          });

          const savedUser = await newUser.save();
          if(savedUser){
            return done(null, savedUser);
          }
            return done("Error in creating user", null);

        }    
        if (user) {
          return done("User already exist. Please login!", user);
        }
    }catch(error){
        return done(error.message, null)
    }
      });

module.exports = SignupStrategy;