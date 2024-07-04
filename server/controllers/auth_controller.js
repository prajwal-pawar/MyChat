const bcrypt = require("bcrypt");
const User = require("../models/user");

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

module.exports.login = (req, res) => {};

module.exports.logout = (req, res) => {};
