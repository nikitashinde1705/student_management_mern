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

//Update Course
exports.updateCourse = async (req, res) => {
    try{
        await Course.findByIdAndUpdate(req.params.id, req.body);
        res.json({message:"Course updated successfully"});
    }
    catch(error){
        res.status(500).json({message:"Course not updated"});
    }
}

//Delete Course
exports.deleteCourse = async(req, res) => {
    try{    
        await Course.findByIdAndDelete(req.params.id);
        res.json({message:"Course deleted successfuly"});
    }
    catch(error){
        res.status(500).json({message:"Course not deleted"})
    }
}
   