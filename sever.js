const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve your HTML file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
