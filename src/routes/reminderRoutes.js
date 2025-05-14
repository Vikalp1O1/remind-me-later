const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder');

// Validation middleware
const validateReminder = (req, res, next) => {
  const { date, time, message, notificationType } = req.body;

  if (!date || !time || !message || !notificationType) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD' });
  }

  // Validate time format (HH:mm)
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!timeRegex.test(time)) {
    return res.status(400).json({ message: 'Invalid time format. Use HH:mm (24-hour format)' });
  }

  // Validate notification type
  if (!['SMS', 'EMAIL'].includes(notificationType)) {
    return res.status(400).json({ message: 'Invalid notification type. Use SMS or EMAIL' });
  }

  next();
};

// Create a new reminder
router.post('/', validateReminder, async (req, res) => {
  try {
    const reminder = new Reminder(req.body);
    await reminder.save();
    res.status(201).json(reminder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all reminders (for testing purposes)
router.get('/', async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 