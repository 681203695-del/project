require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./config/database');

// Import routes
const authRoutes = require('./routes/auth');
const reportRoutes = require('./routes/report');
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(cors({
  origin: "https://condo-care-35vh.vercel.app",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve frontend files from the current project directory

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Test endpoint for frontend check
app.get('/test', (req, res) => {
  res.json({ message: 'Hello from Render Backend!' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: true,
    message: err.message || 'Internal Server Error'
  });
});

// Export app for serverless deployment
module.exports = app;
