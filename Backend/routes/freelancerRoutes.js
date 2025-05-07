const express = require('express');
const router = express.Router();

router.get('/freelancers', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Freelancers fetched successfully',
    data: freelancers
  });
});

module.exports = router;
