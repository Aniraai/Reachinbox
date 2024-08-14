const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const connectDB = require('./config/db'); // Ensure this path is correct
const cors = require('cors');

// Initialize Express app
const app = express();

// Apply middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json({ limit: '10mb' })); // Increase the limit to 10mb (adjust as needed)
app.use(express.urlencoded({ extended: false, limit: '10mb' })); // Increase the limit to 10mb (adjust as needed)
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import and use the routes
app.use('/api/replies', require('./routes/reply'));  // Ensure this is correct

// Error handling
app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({ error: err.message });
});

// Connect to the database
connectDB();

// module.exports = app;


// Start server
const port = 3001; // Set the desired port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
