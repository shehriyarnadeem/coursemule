
const UserModel = require('../../models/users')
const passport = require('passport');
var LocalStrategy = require('passport-local');
/**
   * Add Course into Courses table with basic name and description
   *
   * @param {String} fullName
   * @param {String} username
   * @param {String} password
   * @param {String} email
   */
const createAccount = async ({password, userName, email, fullName}) => {

  try {
   const checkIfUserExists = await UserModel.findOne({userName});
   if(!checkIfUserExists){ 
   const userModel = new UserModel({fullName, userName, password, email});
   const response =  await userModel.save();
   return response;
   }
   return false
}catch(e){
   throw e.errmsg;
  }
};

/**
   * Add Course into Courses table with basic name and description
   *
   * @param {String} userName
   * @param {String} password
   */
const loginUser = async (req, res) => {
  
      try { 
   
         console.log(req, req.user);
         return res.status(200).send({messsage:"Login success", data:req.user})
      }catch(e){
         return res.status(400).send({errorMessage:e.message});
      }
      
  };
  
  
  module.exports = {
   createAccount,
   loginUser
  };