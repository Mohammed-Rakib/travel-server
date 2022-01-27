const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
