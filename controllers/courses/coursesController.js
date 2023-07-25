/**
 * Authors: Shehriyar Nadeem
 * Description: Controller for Courses
 */
const { addCourseInfo,getAllCourses,getCourseById, uploadCourseContent } = require('./course');
const {addCourseSchema} = require('./schema');
const ExpressUtils = require('../../common/utils/ExpressUtils');
const fs = require('fs');
const {encodeFileName} = require('../../common/utils/helpers')
require('dotenv').config();

getFilesNames = (files) => {
  const videoFiles = [];
  let imageFile=null;
  files.forEach((file) => {
    let fileName=null;
    let title = null;
    if(file.fieldname === 'imageFile' &&  file.originalname.split('.').length >0){
     fileName = file.originalname;
     title= file.originalname.split('.')[0];
     const encodedName = encodeFileName({name:fileName, title: title})
     imageFile = encodedName;
    } else {
      fileName = file.originalname+'.'+file.mimetype.split('/')[1];
      title= file.originalname;
      const encodedName = encodeFileName({name:fileName, title: title})
      videoFiles.push({title: title , name:encodedName});
    }
  });

  return {imageFile, videoFiles};
}

deleteFilesOnFailure = files => {
  
  if(files.length > 0){
    files.forEach((file) => {
       fs.unlinkSync(`uploads/${file.name}`);
     })
   }
 }

exports.addCourse = async (req, res) => {
  try {
  debugger;
  const { courseTitle, courseDescription } = req.body;
  if (!ExpressUtils.validateObject(addCourseSchema, req.body, res)) { return; }
   const {image, videos} = await uploadCourseContent(req.files)
    await addCourseInfo(courseTitle, courseDescription, image, videos );
    res.status(200).send({ message: 'Course added successfully' });
  } catch (error) {
    res.status(error.status).send({ message: error.message });
  }
};

exports.getAllCourses = async (req, res) => {
  // Validate req.body.
  try {

   const result =  await getAllCourses();

    res.status(200).send({ message: 'Courses Fetched successfully', result });
  } catch (error) {
    res.status(error.status).send({ message: error.message });
  }
};

exports.getCourseById = async (req, res) => {
  // Validate req.body.
  try {
    const courseId = req.params.id;
   const result =  await getCourseById(courseId);

    res.status(200).send({ message: 'Courses Fetched successfully', result });
  } catch (error) {
    console.log(error)
    res.status(error.status).send({ message: error.message });
  }
};