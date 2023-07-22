/**
 * Authors: Shehriyar Nadeem
 */

const Schema = require('validate');


const addCourseSchema = new Schema({

  courseTitle: {
     type: String,
     required: true,
  },
  courseDescription: {
     type: String,
  },
});

module.exports = {
    addCourseSchema,
};