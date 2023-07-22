/**
 * Authors: Shehriyar Nadeem
 * Description: Defines all routes for the API.
 */

const express = require('express');
const router = express.Router();
const {getUser, logOut} = require('../controllers/users/usersController')


// router.post('/login', passport.authenticate('local'), users.login);
router.get('/user', getUser );
router.post('/user/logout', logOut );
module.exports = router;