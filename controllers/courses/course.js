
const CourseModel = require('../../models/course')
const uuidv4 = require('uuid');
require('dotenv').config();

const aws = require('aws-sdk')
aws.config.update({
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY,

});
const BUCKET = process.env.BUCKET
const s3 = new aws.S3();
/**
   * Add Course into Courses table with basic name and description
   *
   * @param {String} courseName
   * @param {String} courseDescription
   * @param {File} videos
   */
const addCourseInfo = async (courseTitle, courseDescription, image, videos ) => {

  try { 
   const courseModel = new CourseModel({courseTitle, courseDescription, videos, image});
   const response =  await courseModel.save();
   return response;
}catch(e){
   throw e;
  }
};


const getKey  = file =>{
   let key = null
   key = `${uuidv4.v4()}${file.originalname}`;
   return key;
}

const uploadCourseContent = async (files) => {
   try { 
     // Upload video files
     const videos = [];
     let image = null
     for (const file of files) {
       const uploadParams = {
         Bucket: file.fieldname === 'files'?BUCKET:'videocourseimages',
         Key: getKey(file),
         Body: file.buffer,
         ContentType: file.mimetype,
       };
 
       const uploadResponse = await s3.upload(uploadParams).promise();
       if(file.fieldname === 'files'){
        videos.push({name:uploadResponse.Key, title:file.originalname, location:uploadResponse.Location})
       } else {
        image = {name:uploadResponse.Key, location:uploadResponse.Location};
       }

       console.log('Video file uploaded:', uploadResponse.Location);
     }
     return {image, videos};
   } catch (error) {
     console.error('Error uploading files:', error);
   }
 }

  const getAllCourses = async () => {

   try { 
    const courseModel = await CourseModel.find({}).lean();
    return courseModel
   }catch(e){
    throw e;
   }
   };

   const getCourseById = async (id) => {

      try { 
       const courseModel = await CourseModel.findById(id)
       return courseModel
      }catch(e){
       throw e;
      }
};

const fetchCourseS3Bucket = async (key) =>{
  s3.listObjects({ Bucket: 'allcoursevideos', Key }, (err, data) => {
    if (err) {
      console.log('Error listing objects:', err);
    } else {
      console.log('Objects in the bucket:');
      data.Contents.forEach(obj => {
        console.log(obj.Key);
      });
    }
  });
  
}
  
  module.exports = {
   addCourseInfo,
   getAllCourses,
   getCourseById,
   uploadCourseContent
  };