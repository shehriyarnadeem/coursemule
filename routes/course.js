/**
 * Authors: Shehriyar Nadeem
 * Description: Defines all routes for the API.
 */

// Controllers.
const express = require('express');
const courses = require('../controllers/courses/coursesController');
const router = express.Router();

router.post('/course', courses.addCourse);
router.get('/course', courses.getAllCourses );
router.get('/course/:id', courses.getCourseById );

module.exports = router;