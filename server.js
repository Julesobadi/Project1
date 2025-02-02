const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

console.log("🚀 Starting server...");

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
console.log("📂 Static files middleware loaded");

// Route for '/'
app.get('/', (req, res) => {
    console.log("✅ Received request at /");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
