const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // console.log("MONGO_URI:", process.env.MONGO_URI); // 👈 Debug log
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
    
    console.log("Mongoose connected to DB:", mongoose.connection.name);


  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
