
const Univ = require('../models/univModel');
const ErrorResponse = require('../utils/errorResponse');


exports.addUniv = async (req, res, next) => {
    const { univName } = req.body;
    const univExist = await Univ.findOne({ univName });
    if (univExist) {
        return next(new ErrorResponse("University already added", 400));
    }
    try {
        const univ = await Univ.create({
            univName:req.body.univName,
            about:req.body.about,
            location:req.body.location,
            state:req.body.state,
            country:req.body.country, 
            type:req.body.type,
            rank:req.body.rank,
            founded_date:req.body.founded_date,
            founded_year:req.body.founded_year,
            gratio:req.body.gratio,
            alumini:req.body.alumini,
            strength:req.body.strength,
            international_students:req.body.international_students,
            gpa:req.body.gpa,
            acceptance:req.body.acceptance,
            approach:req.body.approach,
            toefl:req.body.toefl,
            duolingo:req.body.duolingo,
            pte:req.body.pte,
            ielts:req.body.ielts,
            gre:req.body.gre,
            gre_quant:req.body.gre_quant,
            gre_verbal:req.body.gre_verbal,
            gre_awa:req.body.gre_awa,
            exams_accepted:req.body.exams_accepted,
            intakes:req.body.intakes,
            salary:req.body.salary,
            majority:req.body.majority,
            expenses:req.body.expenses,
            tuition_expenses:req.body.tuition_expenses,
            living_expenses:req.body.living_expenses,
            safety:req.body.safety,
            weather:req.body.weather,
            logo:req.body.logo,
            image:req.body.image,
            univ_link:req.body.univ_link,
            program_name:req.body.programs,
            program_description:req.body.programs,
            program_intake:req.body.program_intake_deadlines,
            program_intake_deadline:req.body.program_intake_deadline,
            program_intake_notes:req.body.program_intake_notes,
            program_prerequisites:req.body.programs,
            program_application_cost:req.body.programs,
            program_application_requirements:req.body.programs,
            program_degree:req.body.programs,
            program_cost:req.body.programs,
            program_link:req.body.program_link,
            program_notes:req.body.programs,
            general_application_link:req.body.general_application_link,
            general_application_cost:req.body.general_application_cost,
            general_application_requirements:req.body.general_application_requirements,
            general_deadline:req.body.general_deadline,
            gre_institution_code:req.body.gre_institution_code,
            toefl_institution_code:req.body.toefl_institution_code,
            ielts_institution_code:req.body.ielts_institution_code,
            notes:req.body.notes,
            user:req.user.id});
        res.status(201).json({
            success: true,
            univ
        })
    } catch (error) {
        next(error);
    }
}

exports.allUnivs = async (req, res, next) => {
    try {
        const {keyword}=req.params
        const results = await Univ.find({
            $or:[
                {univName:{$regex:keyword,$options:"i"}},
                {programs:{$regex:keyword,$options:"i"}},
            ]
        });
        res.status(200).json({
            success: true,
            results
        })
    } catch (error) {
        next(error)
    }
}

exports.singleUniv = async (req, res, next) => {
    try {
        const univ = await Univ.findById(req.params.univId);
        res.status(200).json({
            success: true,
            univ
        })
    } catch (error) {
        next(error)
    }
}

exports.updateUniv = async (req, res, next) => {
    try {
        const univ = await Univ.findByIdAndUpdate(req.params.univ_id,req.body,{new:true});
        res.status(200).json({
            success: true,
            univ
        })
    } catch (error) {
        next(error)
    }
}

exports.deleteUniv = async (req, res, next) => {
    try {
        const univ = await Univ.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success: true,
            message:'University was deleted successfully',
            univ
        })
    } catch (error) {
        next(error)
    }
}



//show results
exports.showUnivs = async (req, res, next) => {

    //enable search 
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}


    // filter jobs by category ids
    let types = [];
    const univByType = await Univ.find({}, { type: 1 });
    univByType.forEach(cat => {
        types.push(cat.type);
    })
    let setUniqueType = [...new Set(types)];
    let type = req.query.type;
    let typeFilter = type !=='' ? type :setUniqueType;


    //jobs by location
    let locations = [];
    const univByLocation = await Univ.find({}, { location: 1 });
    univByLocation.forEach(val => {
        locations.push(val.location);
    });
    let setUniqueLocation = [...new Set(locations)];
    let location = req.query.location;
    let locationFilter = location !== '' ? location : setUniqueLocation;


    //enable pagination
    const pageSize =200;
    const page = Number(req.query.pageNumber) || 1;
    // const count = await Univ.find({}).estimatedDocumentCount();
    const count = await Univ.find({ ...keyword ,typeFilter,locationFilter}).countDocuments();

    try {
        const univs = await Univ.find({ ...keyword,typeFilter,locationFilter}).sort({ rank: 1 }).skip(pageSize * (page - 1)).limit(pageSize)
        res.status(200).json({
            success: true,
            univs,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueType,
            setUniqueLocation

        })
    } catch (error) {
        next(error);
    }
}

exports.singleProg = async (req, res, next) => {
    try {
        const univ = await Univ.findById(req.params.univId);
        if (!univ) return res.status(404).send('University not found');

        const program = univ.programs.id(req.params.programId);
        if (!program) return res.status(404).send('Program not found');

        res.status(200).json({
            success:true,
            program
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}