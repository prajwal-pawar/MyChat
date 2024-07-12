const User = require("../models/user");

module.exports.getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // find all users except logged in user without password
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    ); // .select("-password") removes the password from user object

    return res.status(200).json(allUsers);
  } catch (err) {
    console.error("Error in fetching users", err);
    return res.status(500).json({ error: "Error fetching users" });
  }
};
