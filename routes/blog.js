const express = require("express");
const router = express.Router();

const {
  blogs,
  singleBlog,
  postBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogControllers");

// get all blog
router.get("/", blogs);

// get a blog by id
router.get("/:id", singleBlog);

// post a blog
router.post("/", postBlog);

// update a blog
router.put("/:id", updateBlog);

// delete a blog
router.delete("/:id", deleteBlog);

module.exports = router;
