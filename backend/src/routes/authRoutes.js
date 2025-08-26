// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.get('/register', (req,res) => {
    res.send('Hello World!')
});
// router.post('/login', login);



module.exports = router; // <-- must export router
