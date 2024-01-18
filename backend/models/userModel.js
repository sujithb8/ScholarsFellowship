const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {ObjectId} = mongoose.Schema;


const univShortlistSchema = new mongoose.Schema({
    univName: {
        type: String,
        required:true,
        unique:true
    },
    location: {
        type: String,
        required:false,
    },
    state:{
        type: String,
        required:false,
    },
    country: {
        type: String,
        required: false,
    },
     //0 = Public, 1 = private
    type: {
        type: Boolean,
        required:false,
    },
    rank: {
        type:Number,
        required:false,
    },
    gratio: {
        type:String,
        required: false,
    },
    gpa:{
        type:Number,
        required:false,
    },
    acceptance:{
        type:Number,
        required:false,
    }, 
    //0=GPA. 1=Holostic
    approach:{
        type:Boolean,
        required:false,
    },
    toefl:{
        type:Number,
        required:false,
    },
    duolingo:{
        type:Number,
        required:false,
    },
    pte:{
        type:Number,
        required:false,
    },
    ielts:{
        type:Number,
        required: false,
    },
    gre_quant:{
        type:Number,
        required:false,
    },
    gre_verbal:{
        type:Number,
        required:false,
    },
    gre_awa:{
        type:Number,
        required:false,
    },
    
    gre:{
        type:Number,
        required: false,
    },
    exams_accepted:{
        type:[String],
        required:false
    },
    intakes:{
        type:[String],
        required:false
    },
    expenses:{
        type:Number,
        required:false,
    },
    tuition_expenses:{
        type:Number,
        required:false,
    },
    living_expenses:{
        type:Number,
        required:false,
    },
    applicationDate: {
        type: Date,
    },
    riskFactor:{
        type:String,
        enum:[]
    },
    programs:{
        type:[String],
        required:false,
    },
    applicationStatus: {
        type: String,
        enum: ['Saved','Applying','Application Pending','Application Done', 'Got Admit', 'Deffered'],
        default: 'Saved'
    },

    user:{
        type:ObjectId,
        ref:"User",
        required:true,
    }

}, { timestamps: true })



const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        maxlength: 32,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'last name is required'],
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'e-mail is required'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        minlength: [6, 'password must have at least (6) caracters'],
    },

  univShortlist: [univShortlistSchema],

    role: {
        type: Number,
        required:true,
        default: 0
    }


}, { timestamps: true })

//encrypting password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// return a JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}

module.exports = mongoose.model("User", userSchema);