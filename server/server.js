
const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const router = require("./routes/authRoutes");
const courseRouter = require("./routes/courseRoutes")
const studentRouter = require("./routes/studentRoutes");
const connectDB = require('./config/db');


dotenv.config();

const app = express();

// 2️⃣ CORS configuration (VERY IMPORTANT)
app.use(cors({
  origin: "http://localhost:5173", // Vite frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Connect to database
connectDB();

app.use("/api/auth", router);
app.use("/api/courses", courseRouter);
app.use("/api/student", studentRouter);




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
