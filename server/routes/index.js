const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  return res.status(200).json({
    message: "Welcome to MyChat API",
  });
});

// auth routes
router.use("/auth", require("./auth"));
// message routes
router.use("/message", require("./message"));

module.exports = router;
