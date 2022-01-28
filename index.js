const express = require("express");
const { connect } = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const port = process.env.PORT || 4040;

const app = express();

const blog = require("./routes/blog");
const user = require("./routes/user");
const review = require("./routes/review");

// connect with database
connect();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/blogs", blog);
app.use("/users", user);
app.use("/reviews", review);

// error handling middlewares
const errorHandler = (err, req, res, next) => {
  if (err.headerSent) {
    return next();
  }
  res.status(500).json(err.message);
};
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});
