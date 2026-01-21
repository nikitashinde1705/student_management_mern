const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const{createCourse, getCourse} = require("../controllers/courseController");

router.post("/createcourse",auth,role("admin"),createCourse);
router.get("/getcourse",auth, getCourse);

module.exports = router;
