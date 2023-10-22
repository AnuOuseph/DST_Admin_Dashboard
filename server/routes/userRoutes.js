const express = require("express");
const {
  register,
  Login,
  allusers,
  deleteUsers,
  updateUsers,
  getAllUsersLoginHistory,
} = require("../controllers/userCtrl");

//router
const router = express.Router();

router.post("/registerUser", register);
router.post("/login", Login);
router.get("/alluser", allusers);
router.post("/deleteUser/:id", deleteUsers);
router.post("/updateUser/:id", updateUsers);
router.get("/LoginHistory", getAllUsersLoginHistory);



module.exports = router;
