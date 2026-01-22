const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {createStudent, updateStudent, deleteStudent, getStudent} = require("../controllers/studentController");

//admin only
router.post("/createcstudent",auth,role("admin"),createStudent);
router.put("/:id",auth, role("admin"), updateStudent);
router.delete("/:id",auth, role("admin"), deleteStudent);

//admin + staff
router.get("/", auth, getStudent);

module.exports = router;