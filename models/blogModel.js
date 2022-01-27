const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  traveler: {
    type: String,
    required: true,
  },
  travelerEmail: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  description: { type: String },
  category: { type: String },
  cost: {
    type: Number,
    required: true,
  },
  location: { type: String },
  date: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
