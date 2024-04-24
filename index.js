const express = require('express');
const compression = require('compression');

const app = express();
const port = 3000; // You can change this to any port you prefer

app.use(compression()); // Enable gzip compression
app.use(express.static('dist')); // Serve static files from the 'public' directory

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});