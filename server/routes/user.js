const express = require("express");
const router = express.Router();

const userController = require("../controllers/user_controller");
// middleware to verify jwt
const { verifyToken } = require("../middlewares/auth");

router.get("/all", verifyToken, userController.getUsers);

module.exports = router;
