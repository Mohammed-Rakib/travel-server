const express = require("express");
const router = express.Router();

const {
  allUsers,
  postUser,
  putUser,
} = require("../controllers/userControllers");

// get all users from database
router.get("/", allUsers);

// create a new user
router.post("/", postUser);

// put a user
router.put("/", putUser);

module.exports = router;
