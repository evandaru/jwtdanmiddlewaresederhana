const express = require('express');
const { verifyToken } = require('../authMiddleware');

const router = express.Router();

// Dummy data
const ikanData = [{ id: 1, nama: 'Ikan Nila' }, { id: 2, nama: 'Ikan Lele' }];

// Ikan route yang diotentikasi dengan JWT
router.get('/', verifyToken, (req, res) => {
    res.json(ikanData);
});

module.exports = router;
