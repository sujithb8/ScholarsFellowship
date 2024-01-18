const express = require('express');
const { allUsers,singleUser,editUser,deleteUser,userUnivShortlist} = require('../controller/userController');
const { isAuthenticated, isAdmin,isUser } = require('../middleware/auth');
const router = express.Router();

//user Routes
// /api/users
router.get('/users',isAuthenticated,isAdmin, allUsers);
// /api/users/id
router.get('/users/:id', isAuthenticated, singleUser);
// /api/user/edit/id
router.put('/users/edit/:id', isAuthenticated, editUser);
// /api/users/delete/id
router.delete('/users/delete/:id', isAuthenticated, isAdmin, deleteUser);

// /api/users/delete/id
router.post('/user/shortlist', isAuthenticated,isUser, userUnivShortlist);

module.exports = router;