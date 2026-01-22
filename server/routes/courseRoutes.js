const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const{createCourse, getCourse, updateCourse, deleteCourse} = require("../controllers/courseController");

router.post("/createcourse",auth,role("admin"),createCourse);
router.get("/getcourse",auth, getCourse);
router.put("/:id",auth,role("admin"), updateCourse);
router.delete("/:id",auth,role("admin"), deleteCourse);

module.exports = router;
