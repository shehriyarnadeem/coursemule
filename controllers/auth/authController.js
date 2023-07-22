/**
 * Authors: Shehriyar Nadeem
 * Description: Controller for Courses
 */
var passport = require('passport');


exports.signUp = async (req,res) => {
  debugger;
  passport.authenticate('local-register', function (error, user, info) {
    if (error) {
      return res.status(200).json({error})
    }
    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(401).json({message:"Can't login", error});
      }
      return res.status(200).json({message:"Logged In", user});
    })
  })(req,res)
}   



exports.login = async (req, res) => {
  
  passport.authenticate('local-login', function (error, user, info) {
    
    if (error) {
      return res.status(200).json({error})
    }
    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(401).json({message:"Can't login", error});
      }
      return res.status(200).json({message:"Logged In", user});
    })
  })(req,res)
};