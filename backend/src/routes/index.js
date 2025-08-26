const express = require('express');
const authRoutes = require('./authRoutes');
const mediaRoutes = require('./mediaRoutes');
const contactRoutes = require('./contactRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Mount sub-routes
router.use('/auth', authRoutes);
// router.use('/media', mediaRoutes);
// router.use('/contact', contactRoutes);
// router.use('/users', userRoutes);

module.exports = router; // <-- Make sure you export the router
