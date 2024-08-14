// backend/routes/replyRoutes.js

const express = require('express');
const router = express.Router();
const Reply = require('../models/replyModel');

// Route to get all replies
router.get('/', async (req, res) => {
    try {
        const replies = await Reply.find({});
        res.status(200).json(replies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching replies', error });
    }
});

// Route to create a new reply
router.post('/', async (req, res) => {
    try {
        const { thread_id, from, to, subject, body } = req.body;

        // Validate required fields
        if (!thread_id || !from || !to || !subject || !body) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new reply
        const newReply = new Reply({
            thread_id,
            from,
            to,
            subject,
            body,
        });

        // Save the reply to the database
        const savedReply = await newReply.save();
        res.status(201).json(savedReply);
    } catch (error) {
        res.status(500).json({ message: 'Error creating reply', error });
    }
});

module.exports = router;
