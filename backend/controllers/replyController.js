const Reply = require('../models/replyModel');
const emailService = require('../services/emailService');

exports.sendReply = async (req, res) => {
  const { thread_id } = req.params;
  const { from, to, subject, body } = req.body;

  try {
    // Validate the input
    if (!from || !to || !subject || !body) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save the reply to the database
    const newReply = new Reply({
      thread_id,
      from,
      to,
      subject,
      body,
    });
    await newReply.save();

    // Send the email
    await emailService.sendEmail(from, to, subject, body);

    res.status(200).json({ message: 'Reply sent successfully' });
  } catch (error) {
    console.error('Error sending reply:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
