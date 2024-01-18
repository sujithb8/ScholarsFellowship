const User = require ("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

//load all users
exports.allUsers = async (req, res,next) => {
    //enable pagination
    const pageSize =10;
    const page = Number(req.query.pageNumber) || 1;
    const count = await User.find({}).estimatedDocumentCount();

    try {
        const users = await User.find().sort({createdAt:-1}).select('-password')
        .skip(pageSize * (page-1))
        .limit(pageSize)
        res.status(200).json({
            success: true,
            users,
            page,
            pages:Math.ceil(count/pageSize),
            count
        })
    } catch (error) {
        return next(error);
    }
}

//show single user
exports.singleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            user
        })
        next();

    } catch (error) {
        return next(error);
    }
}


//edit user
exports.editUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            user
        })
        next();

    } catch (error) {
        return next(error);
    }
}

//delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success: true,
            message: "user deleted"
        })
        next();

    } catch (error) {
        return next(error);
    }
}
//jobs history
exports.userUnivShortlist = async (req, res, next) => {
    const { univName, location,state,country,type,gpa,gratio,rank,approach,acceptance,gre,ielts,pte,toefl,exams_accepted,intakes,expenses,living_expenses,tuition_expenses,programs,applicationStatus,riskFactor,user} = req.body;

    try {
        const currentUser = await User.findOne({ _id: req.user._id});
        if (!currentUser) {
            return next(new ErrorResponse("You must log In", 401));
        } else {
            const addUnivShortlist = {
                univName, location,state,country,type,gpa,gratio,rank,approach,acceptance,gre,ielts,pte,toefl,exams_accepted,intakes,expenses,living_expenses,tuition_expenses,programs,applicationStatus,riskFactor,
                user: req.user._id
            }
            currentUser.univShortlist.push(addUnivShortlist);
            await currentUser.save();
        }

        res.status(200).json({
            success: true,
            currentUser
        })
        next();

    } catch (error) {
        return next(error);
    }
}
