const express = require('express');
const router = express.Router();

// Dummy data
const pedagangData = [{ id: 1, nama: 'Budi' }, { id: 2, nama: 'Susi' }];

// Pedagang route
router.get('/', (req, res) => {
    res.json(pedagangData);
});

module.exports = router;
