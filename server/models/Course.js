const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
    },
    duration:{
        type:String,
    },
    fee:{
        type:Number,
    }
});

module.exports = mongoose.model("Course", courseSchema);