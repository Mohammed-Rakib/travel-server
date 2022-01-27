const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database successfully");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { connect };
