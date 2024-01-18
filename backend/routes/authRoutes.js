const express = require('express');
const { signup,signin ,logout, userProfile} = require('../controller/authController');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();

//auth Routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout',isAuthenticated, logout);
// /api/profile
router.get('/profile',isAuthenticated, userProfile);


module.exports = router;