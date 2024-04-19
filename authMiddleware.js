const jwt = require('jsonwebtoken');

// Secret key for JWT
const secretKey = 'ikan'; 

// Middleware untuk verifikasi token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token tidak tersedia!' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token tidak valid!' });
        }
        req.body.userId = decoded.userId;
        next();
    });
};

// Fungsi untuk menghasilkan token
const generateToken = (userId) => {
    return jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
};

module.exports = { verifyToken, generateToken };
