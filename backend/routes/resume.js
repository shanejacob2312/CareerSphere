const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Uploads go to /backend/uploads
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Upload resume route
router.post('/upload', upload.single('resume'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    res.json({ filePath: `/uploads/${req.file.filename}` });
});

module.exports = router;
