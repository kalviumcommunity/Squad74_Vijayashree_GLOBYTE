const express = require('express');
const router = express.Router();

router.get('/clients', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Clients fetched successfully',
    data: clients
  });
});

module.exports = router;
