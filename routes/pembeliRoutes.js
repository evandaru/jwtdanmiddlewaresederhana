const express = require('express');
const router = express.Router();

// Dummy data
const pembeliData = [{ id: 1, nama: 'Agus' }, { id: 2, nama: 'Rina' }];

// Pembeli route
router.get('/', (req, res) => {
    res.json(pembeliData);
});

module.exports = router;
