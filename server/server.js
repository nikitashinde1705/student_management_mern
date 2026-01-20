// const express = require('express');
// const dotenv = require('dotenv');
// const router = require("./routes/authRoutes");
// require('dotenv').config();
// const connectDB = require('./config/db');

// const app = express();
// app.use(express.json());

// // Connect to database
// connectDB();

// app.use("/api/auth", router);

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });

const express = require('express');
const dotenv = require('dotenv');
const router = require("./routes/authRoutes");
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to database
connectDB();

app.use("/api/auth", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
