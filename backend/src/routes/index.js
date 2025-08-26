const express = require('express');
const authRoutes = require('./authRoutes');

const router = express.Router();

router.use('/auth', authRoutes);

router.get('/test', (req, res) => {
  res.send('✅ Backend is running');
});

module.exports = router;
