const mongoose = require("mongoose");
const { User } = require("../models/userModel");

// get all users
const allUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// create a user
const postUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// put a user
const putUser = async (req, res) => {
  try {
    const user = req.body;
    const filter = { email: user.email };
    const options = { upsert: true };
    const updateDoc = { $set: user };
    const result = await User.findOneAndUpdate(filter, updateDoc, options);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { allUsers, postUser, putUser };
