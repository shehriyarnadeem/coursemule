const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: true,
    },

    courseDescription: {
      type: String,
      trim: true,
    },
    videos: [],
    image: {},
   },
);
const CourseModel = mongoose.model('courses', CourseSchema);
module.exports = CourseModel
