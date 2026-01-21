const Course = require("../models/Course");

exports.createCourse = async (req, res) => {

    const course = await Course.create(req.body);
    res.status(200).json({message:"Course Created Successfully", course});

};

exports.getCourse = async(req, res) => {
    try{
         res.json(await Course.find());
}    catch(error){
        res.status(500).json({message: error.message});
    }
}
   