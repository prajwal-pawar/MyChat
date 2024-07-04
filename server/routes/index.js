const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  return res.status(200).json({
    message: "Welcome to MyChat API",
  });
});

router.use("/auth", require("./auth"));

module.exports = router;
