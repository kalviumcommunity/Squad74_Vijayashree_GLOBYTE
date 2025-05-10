const express = require('express');
const router = express.Router();
const Freelancer = require('../models/Freelancer'); 


router.get('/freelancers', async (req, res) => {
  try {
    const freelancers = await Freelancer.find();
    res.status(200).json({
      success: true,
      message: 'Freelancers fetched successfully',
      data: freelancers,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
});


router.post('/freelancers', async (req, res) => {
  try {
    const { name, email, skills, experience } = req.body;
    const newFreelancer = new Freelancer({ name, email, skills, experience });
    const savedFreelancer = await newFreelancer.save();
    res.status(201).json({
      success: true,
      message: 'Freelancer added successfully',
      data: savedFreelancer,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to add freelancer', error: error.message });
  }
});

module.exports = router;
