/**
 * Authors: Shehriyar Nadeem
 * Description: Defines all routes for the API.
 */
const express = require('express');
const router = express.Router();
const {signUp, login} = require('../controllers/auth/authController') 


router.post('/signUp', signUp);

router.post('/login', login);
module.exports = router;