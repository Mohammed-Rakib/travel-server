const mongoose = require("mongoose");

const { Blog } = require("../models/blogModel");

// get all blogs
const blogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs.reverse());
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// get a blog by Id
const singleBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: mongoose.Types.ObjectId(id) };
    const result = await Blog.findOne(query);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// write a blog
const postBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const result = await blog.save();
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// update a blog
const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: mongoose.Types.ObjectId(id) };
    const options = { upsert: true };
    const updateBlog = { $set: req.body };
    const result = await Blog.updateOne(filter, updateBlog, options);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// delete a blog
const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Blog.findByIdAndDelete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  blogs,
  singleBlog,
  postBlog,
  updateBlog,
  deleteBlog,
};
