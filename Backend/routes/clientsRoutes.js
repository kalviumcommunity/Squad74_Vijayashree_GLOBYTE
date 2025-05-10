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

router.put('/clients/:id', async (req, res) => {
  const { id } = req.params;
  const { company, email, project, budget } = req.body;

  try {
    const updatedClient = await Client.findByIdAndUpdate(
      id,
      { company, email, project, budget },
      { new: true, runValidators: true }
    );

    if (!updatedClient) {
      return res.status(404).json({ success: false, message: 'Client not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Client updated successfully',
      data: updatedClient,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
