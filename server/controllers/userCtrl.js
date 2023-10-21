const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require(`jsonwebtoken`);

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, fullname, email, password, nation, mobile, balance } =
      req.body;

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new userModel({
      username,
      fullname,
      email,
      password: hashedPassword,
      nation,
      mobile,
      lastLogin: new Date(),
      balance,
    });

    const savedUser = await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Registration failed", error });
  }
};
const Login = async (req, res) => {
    const user = await userModel.findOne({ email: req.body.email });
    const userEmail = req.body.email;
    console.log("Email received:", userEmail);
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!user) {
      return res.status(400).send("The user not found");
    }
  
    await userModel.findByIdAndUpdate(
      { _id: user._id },
      {
        isAuthenticated: true,
        lastLogin: new Date(),
        loginHistory: [{ timestamp: new Date(), source: "source" }],
      }
    );
  
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign(
  
        {
          userId: user.id,
        },
        JWT_SECRET,
        { expiresIn: "4w" }
        
      );
      console.log(token);
      res.status(200).send({ user: user.email, token: token });
    } else {
      res.status(400).send("Password is Wrong!");
    }
  };
  
  //ALL USERS
  const allusers = async (req, res) => {
    try {
      const activeUser = await userModel.find({ accountStatus: "active" });
      // const isAuthenticated = activeUser.map((user) => user.isAuthenticated);
      // return res.json({users: activeUser, isAuthenticated });
      return res.json(activeUser);
    } catch (error) {
      res.json(error);
    }
  };
  
  //DELETE USER
  const deleteUsers = async (req, res) => {
    let id = req.params.id;
    await userModel.findByIdAndDelete({ _id: id });
    res.json("success");
  };
  
  //UPDATE USER
  const updateUsers = async (req, res) => {
    try {
      const userId = req.params.id;
      const { username, fullName, email, password, nation, mobile, balance } =
        req.body;
      const user = await userModel.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Update user properties
      Object.assign(user, {
        username,
        fullName,
        email,
        password,
        nation,
        mobile,
        balance,
      });
      const updatedUser = await user.save();
      res
        .status(200)
        .json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Update failed", error });
    }
  };
  
  //All user Login History
  const getAllUsersLoginHistory = async (req, res) => {
    try {
      // Find all users and select the necessary fields, including loginHistory
      const users = await userModel
        .find({}, "username loginHistory")
        .populate("loginHistory")
        .exec();
  
      // Process the user data to extract login history
      const loginHistoryForAllUsers = users.map((user) => ({
        userId: user._id,
        username: user.username,
        loginHistory: user.loginHistory,
      }));
  
      res.status(200).json({ success: true, loginHistoryForAllUsers });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error retrieving login history for all users",
        error: error.message,
      });
    }
  };
  
  module.exports = {
    register,
    Login,
    allusers,
    deleteUsers,
    updateUsers,
    getAllUsersLoginHistory,
  };
  
