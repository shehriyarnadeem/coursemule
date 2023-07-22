const Strategy = require("passport-local").Strategy;
const UserModel = require("../models/users");

const LoginStrategy = new Strategy(
  { passReqToCallback:true, usernameField: "email" },
  async function async(req, email, password, done) {
    try {
    const user = await UserModel.findOne({ email })

    if (!user) {
        return done("Email not found", null);
    }
    const verifyPassword = await user.comparePassword(password);

    if(verifyPassword){
        return done(null, user);
    }
    
    return done("Email or password is incorrect", null);  

    }catch(error){
        return done(error.message, null)
    }
 });

module.exports = LoginStrategy;