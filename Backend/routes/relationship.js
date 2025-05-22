const express = require('express');
const router = express.Router();
const Client = require('../models/Clients');
const Freelancer = require('../models/Freelancer');

// Link a freelancer to a client
router.post('/link', async (req, res) => {
  const { clientId, freelancerId } = req.body;

  try {
    const client = await Client.findById(clientId);
    const freelancer = await Freelancer.findById(freelancerId);

    if (!client || !freelancer) {
      return res.status(404).json({ success: false, message: 'Client or Freelancer not found' });
    }

    // Add freelancer to client
    client.freelancers.push(freelancerId);
    await client.save();

    // Add client to freelancer
    freelancer.clients.push(clientId);
    await freelancer.save();

    res.status(200).json({ success: true, message: 'Linked successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
