
const mongoose = require("mongoose");
const db =
  "mongodb+srv://food:AB9$NhmjK4bfJcB@cluster0.gnmz8hz.mongodb.net/fooddatabase";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
