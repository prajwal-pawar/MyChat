const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const JWT_SECRET = "zlHMw1Pyjp4WSYkLCI3a7qSUtCsiNdM75I9/rek3WpQ=";

module.exports.signup = async (req, res) => {
  try {
    // deconstruct req.body
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // hash password to save in db
    const hashedPassword = await bcrypt.hashSync(password, 10);

    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    user = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === "male" ? maleProfilePic : femaleProfilePic,
    });

    await user.save();

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    console.error("Error in user registration", err);
    return res.status(500).json({ error: "User registration error" });
  }
};

module.exports.login = async (req, res) => {
  try {
    // deconstruct req.body
    const { username, password } = req.body;

    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "User doesn't exists" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // return cookie as response
    return res
      .cookie("token", token, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      })
      .status(200)
      .json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePicture: user.profilePicture,
      });
  } catch (err) {
    console.error("Error in user login", err);
    return res.status(500).json({ error: "User login error" });
  }
};

module.exports.logout = (req, res) => {};
