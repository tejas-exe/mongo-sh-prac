require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const SuperCar = require('../models/SuperCar');
const seedCarsData = require('../data/seedCars');

const runSeed = async () => {
  console.log('[Seeder] Connecting to MongoDB...');
  const connected = await connectDB();
  if (!connected) {
    console.error('[Seeder] Failed to connect to MongoDB. Make sure MongoDB is running!');
    process.exit(1);
  }

  try {
    console.log('[Seeder] Clearing existing super_cars collection...');
    await SuperCar.deleteMany({});

    console.log(`[Seeder] Inserting ${seedCarsData.length} supercar documents...`);
    const inserted = await SuperCar.insertMany(seedCarsData);

    console.log(`[Seeder] ✅ Successfully seeded ${inserted.length} supercar records into "cars_db.super_cars"!`);
    process.exit(0);
  } catch (error) {
    console.error('[Seeder] ❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

runSeed();
