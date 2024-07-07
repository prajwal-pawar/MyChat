const jwt = require("jsonwebtoken");
const User = require("../models/user");

const JWT_SECRET_KEY = "zlHMw1Pyjp4WSYkLCI3a7qSUtCsiNdM75I9/rek3WpQ=";

module.exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token || null;

    if (!token) {
      return res.status(401).json({
        error: "Unauthorized request, no token provided",
      });
    }

    // verify jwt
    const decodedToken = jwt.verify(token, JWT_SECRET_KEY);

    if (!decodedToken) {
      return res.status(401).json({
        error: "Unauthorized request, invalid token",
      });
    }

    // .select("-password") removes the password from user object
    const user = await User.findOne({ _id: decodedToken.userId }).select(
      "-password"
    );

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // set user in req object to use in further routes and authorize user
    req.user = user;

    next();
  } catch (err) {
    console.error("Error in verifying token", err);
    return res.status(500).json({ error: "JWT not verified" });
  }
};
