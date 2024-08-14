const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
  thread_id: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Reply = mongoose.model('Reply', ReplySchema);

module.exports = Reply;
