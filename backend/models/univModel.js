const mongoose = require('mongoose')
const {ObjectId}= mongoose.Schema


const univSchema = new mongoose.Schema({
    univName: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: 32,
    },
    about:{
        type: [String],
        required: false,
        maxlength: 255,
        default:"write details here",
    },
    campus_area:{
        type:Number,
        required: false,
    },
    location: {
        type: String,
        required:true,
        default:0,
    },
    state:{
        type: String,
        required:true,
        default:0,
    },
    country: {
        type: String,
        required: true,
        default:0,
    },
     //0 = Public, 1 = private
    type: {
        type: Boolean,
        required:true,
        default:false,
    },
    rank: {
        type:Number,
        required:true,
        default:0,
    },
    founded_date: {
        type:String,
        required:false,
        default:0,
    },
    founded_year: {
        type:Number,
        required:false,
        default:0,
    },
    gratio: {
        type:String,
        required: false,
        default:null,   
    },
    aluminus:{
        type:[String],
        required: false,
         default:[null],
    },
    strength:{
        type:Number,
        required: false,
        default:0,
    },
   international_students: {
    type:Number,
    required:false,
   },
    gpa:{
        type:Number,
        required:false,
        default:0,  
    },
    acceptance:{
        type:Number,
        required:false,
        default:0, 
    }, 
    //0=GPA. 1=Holostic
    approach:{
        type:Boolean,
        required:false,
        default:false,
    },
    toefl:{
        type:Number,
        required:true,
        default:0, 
    },
    duolingo:{
        type:Number,
        required:false,
        default:0,
    },
    pte:{
        type:Number,
        required:false,
        default:0, 
    },
    ielts:{
        type:Number,
        required: false,
        default:0, 
    },
    gre:{
        type:Number,
        required:false,
        default:0, 
    },
    gre_quant:{
        type:Number,
        required:false,
        default:0, 
    },
    gre_verbal:{
        type:Number,
        required:false,
        default:0, 
    },
    gre_awa:{
        type:Number,
        required:false,
        required:false,
        default:0,  
    },
    
    exams_accepted:{
        type:[String],
        enum:['ielts', 'gre','toefl'],
        required:false,
         default:["Ielts", "Toefl"],
    },
    intakes:{
        type:[String],
        enum:['Fall','Spring','Summer','Autumn','Winter'],
        required:false,
         default:["Aug 2024"],
    },
    average_salary:{
        type:Number,
        required:false,
        default:0,  
    },
    majority:{
        type:String,
        required:false,
        default:0,  
    },
    expenses:{
        type:Number,
        required:false,
        default:0,
    },
    tuition_expenses:{
        type:Number,
        required:false,
        default:0,
    },
    living_expenses:{
        type:Number,
        required:false,
        default:0,  
    },
    safety:{
        type:String,
        required:false,
         default:"moderate",
    },
    weather:{
        type:String,
        required:false,
        default:"normal",
    },
    logo:{
        type:String,
        required:false,
        default:0,
    },
    image:{
        type:String,
        required:false,
        default:0
    },
    images:{
        type:[String],
        required:false,
        default:0,
    },
    univ_link:{
        type:String,
        required:false,
        default:0,
    },
    teaching_assistantships:{
        type:Number,
        required:false,
    },
    research_assistantships:{
        type:Number,
        required:false,
    },
    fellowships:{
        type:Number,
        required:false,
    },
    //programs model
    programs: [{
    program_name: {
      type: String,
      required: false
    },
    program_description: {
        type: [String],
        required: false
    },
     program_intake_deadlines: [{
        program_intake:{
            type:String,
            enum:["Fall","Spring","Summer","Autumn"],
            required:false
        },
        program_intake_deadline:{
            type:Date,
            required:false
        },
        program_intake_notes:{
            type:[String],
            required:false
        }
     }],
     program_prerequisites:{
        type:[String],
        required:false
     },
     program_application_cost:{
        type:Number,
        required:false
     },program_application_requirements:{
         type:[String],
        required:false
     },
     program_link: {
        type: String,
        required: false
    },
    program_degree: {
        type:String,
        enum:['MS','BS','PhD'],
        required:false
    },
    program_cost:{
         type:Number,
        required:false
    },
    program_notes:{
        type:[String],
        required:false
    }
  }],
  general_application_link: {
    type: String, 
    required:false
  },
  general_application_requirements:{
    type:[String],
    required:false
  },
  general_application_cost:{
        type:Number,
        required:false,
        default:0},
  general_deadline:{
            type:Date,
            required:false,
        },
  gre_institution_code:{
        type:String,
        required:false,
        default:0,},
  toefl_institution_code:{
        type:String,
        required:false,
        default:0,},
  ielts_institution_code:{
        type:String,
        required:false,
        default:0,},
  notes:{type:[String],
        required:false,
        default:0},

    user:{
        type:ObjectId,
        ref:"User",
        required:true,
    }

}, { timestamps: true })


module.exports = mongoose.model("Univ", univSchema);