const express = require('express');
const { generateToken } = require('../authMiddleware');

const router = express.Router();

// Rute untuk login
router.post('/login', (req, res) => {
    // Di sini Anda bisa memeriksa kredensial, contoh sederhana:
    const { username, password } = req.body;
    if (username === 'user' && password === 'password') {
        const token = generateToken(username);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Login gagal. Cek kembali username dan password Anda.' });
    }
});

module.exports = router;
