const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
    isActive: {
        type:Boolean,
        default:true
    }, timestamp: true});

module.exports = mongoose.model("Student", studentSchema);