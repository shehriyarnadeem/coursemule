/**
 * Authors: Shehriyar Nadeem
 */

const Schema = require('validate');


const signUpSchema = new Schema({

  email: {
     type: String,
     required: true,
  },
  fullName: {
     type: String,
  },
  userName: {
   type:String,
   required:true
  },
  password:{
   type:String,
   required:true
  }
});

const loginSchema = new Schema({
   username: {
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   }
 });

module.exports = {
   signUpSchema,
   loginSchema
};