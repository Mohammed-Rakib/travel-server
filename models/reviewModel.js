const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewModel = new Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Review = mongoose.model("Review", reviewModel);

module.exports = { Review };
