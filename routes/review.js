const express = require("express");
const router = express.Router();

const {
  allReviews,
  postReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewControllers");

// get all reviews
router.get("/", allReviews);

// post a new review
router.post("/", postReview);

// update a review
router.put("/", updateReview);

// delete a review
router.delete("/", deleteReview);

module.exports = router;
