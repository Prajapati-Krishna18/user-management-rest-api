require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound } = require('./middleware/notFoundMiddleware');
const { errorHandler } = require('./middleware/errorMiddleware');

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors());
app.use(express.json());

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Routes
app.use('/users', userRoutes);

// Root endpoint / Health check
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'User Management API is running...',
    timestamp: new Date().toISOString(),
  });
});

// Middleware for handling non-existent routes
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
