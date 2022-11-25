const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("mongodb is connected successfully");
  } catch (error) {
    console.log(`error occured ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
