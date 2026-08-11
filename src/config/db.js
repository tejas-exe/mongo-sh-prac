const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cars_db';
  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000 // 5 seconds timeout if MongoDB server is offline
    });
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}/${conn.connection.name}`);
    return true;
  } catch (error) {
    console.error(`[MongoDB] Connection Warning/Error: ${error.message}`);
    console.warn(`[MongoDB] Running in offline/disconnected mode. Ensure MongoDB server is running on ${mongoURI} to execute DB queries.`);
    return false;
  }
};

module.exports = connectDB;
