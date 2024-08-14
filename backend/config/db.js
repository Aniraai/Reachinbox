const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoURI = 'mongodb://localhost:27017/REACHINBOX'; // Replace with your MongoDB URI
    
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
