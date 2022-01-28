const mongoose = require("mongoose");
const { Review } = require("../models/reviewModel");

// get all reviews
const allReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.json(reviews.reverse());
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// create a new review
const postReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    const result = await review.save();
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// update review
const updateReview = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: mongoose.Types.ObjectId(id) };
    const options = { upsert: true };
    const updateDoc = { $set: req.body };

    const result = await Review.findByIdAndUpdate(filter, updateDoc, options);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// delete review
const deleteReview = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Review.findByIdAndDelete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { allReviews, postReview, updateReview, deleteReview };
