const express = require('express');
const router = express.Router();
const Client = require('../models/Clients');

router.get('/clients', async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json({
      success: true,
      message: 'Clients fetched successfully',
      data: clients,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/clients', async (req, res) => {
  const { company, email, project, budget } = req.body;

  if (!company || !email) {
    return res.status(400).json({ success: false, message: 'Company and Email are required' });
  }

  try {
    const newClient = new Client({ company, email, project, budget });
    await newClient.save();

    res.status(201).json({
      success: true,
      message: 'Client created successfully',
      data: newClient,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
