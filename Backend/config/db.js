const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (err) {
    console.log(`Error : ${err.message}`);
    process.exit();
  }
};

module.exports = connectDB;
