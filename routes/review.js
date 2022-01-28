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
router.put("/:id", updateReview);

// delete a review
router.delete("/:id", deleteReview);

module.exports = router;
