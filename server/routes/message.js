const express = require("express");
const router = express.Router();

const messageController = require("../controllers/message_controller");
// middleware to verify jwt
const { verifyToken } = require("../middlewares/auth");

router.post("/send/:id", verifyToken, messageController.sendMessage);

router.get("/:id", verifyToken, messageController.getMessages);

module.exports = router;
