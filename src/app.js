const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const carRoutes = require('./routes/carRoutes');
const aggregateRoutes = require('./routes/aggregateRoutes');
const practiceRoutes = require('./routes/practiceRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../public')));

// Health & Status check endpoint
app.get('/api/health', (req, res) => {
  const dbState = mongoose.connection.readyState;
  const states = {
    0: 'Disconnected',
    1: 'Connected',
    2: 'Connecting',
    3: 'Disconnecting'
  };
  return res.status(200).json({
    status: 'OK',
    dbConnectionState: states[dbState] || 'Unknown',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/cars', carRoutes);
app.use('/api/aggregate', aggregateRoutes);
app.use('/api/practice', practiceRoutes);

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
