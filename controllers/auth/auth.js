
const UserModel = require('../../models/users')
const passport = require('passport');

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
  
  
  module.exports = {
   createAccount,

  };