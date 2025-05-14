const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  notificationType: {
    type: String,
    enum: ['SMS', 'EMAIL'],
    required: true
  },
  isProcessed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Reminder', reminderSchema); 