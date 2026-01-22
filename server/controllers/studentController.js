const Student = require("../models/Student");

exports.createStudent = async (req, res) => {

    try{
        const student = await Student.create(req.body);
        res.status(200).json({message:"Student Created Successfully", student});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Server error"})
    }
};

exports.getStudent = async (req, res) => {
    try{
        const students = await Student.find().populate("course");
        res.json(students);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Not get students"});
    }
}

exports.updateStudent = async (req, res) => {
    try{
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.json({message:"Student updated successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Students data are not updated"});
    }
}

exports.deleteStudent = async (req, res) => {
    try{
        await Student.findByIdAndDelete(req.params.id);
        res.json({message:"Student deleted successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Student not deleted"});
    }
}




