require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Define routes
app.post('/api/auth/signup', (req, res) => {
    console.log('Signup request received');
    // Your signup logic here
    res.status(200).json({ msg: 'Signup successful' });
});

// Define a default PORT if not provided in environment variables
const PORT = process.env.PORT || 5000;  // If no PORT is set in the environment, it will default to 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Error handling
app.on('error', (err) => {
    console.error('Server error:', err);
});
