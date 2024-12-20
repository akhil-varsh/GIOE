const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');

router.post('/submit', async (req, res) => {
  try {
    const alumni = new Alumni(req.body);
    await alumni.save();
    res.status(201).json({ 
      success: true, 
      message: 'Alumni data submitted successfully' 
    });
  } catch (error) {
    console.error('Error submitting alumni data:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit alumni data',
      details: error.message 
    });
  }
});

module.exports = router;