const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//middleware for user authentication
exports.isAuthenticated = async (req,res,next) => {
    const {token} = req.cookies;
    //make sure token exists
    if (!token) {
        return next(new ErrorResponse('Login to see details OR Data Unavailable',401));
    }

    try {
        //verify token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error){
        return next(new ErrorResponse('Not authenticated ,Please login',401));
    }
}

//middleware for admin
exports.isAdmin = (req, res, next) => {
    if (req.user.role === 0) {
        return next(new ErrorResponse('Access denied, you must be an admin', 401));
    }
    next();
}

//middleware for user
//middleware for admin
exports.isUser = (req, res, next) => {
    if (req.user.role === 1) {
        return next(new ErrorResponse('Access denied, you must be an User', 401));
    }
    next();
}
