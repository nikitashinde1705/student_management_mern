const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {

        const {name, email, password, role} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({name, email, password:hashedPassword, role});

        res.json({message: "User Registred Successfuly"});

    
}