const express = require('express');
const ikanRoutes = require('./routes/ikanRoutes');
const pedagangRoutes = require('./routes/pedagangRoutes');
const pembeliRoutes = require('./routes/pembeliRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mounting routes
app.use('/ikan', ikanRoutes);
app.use('/pedagang', pedagangRoutes);
app.use('/pembeli', pembeliRoutes);
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
