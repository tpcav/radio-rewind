const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JavaScript) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // Serve the HTML file (index.html)
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
