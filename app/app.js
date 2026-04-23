const express = require('express');
const app = express();

const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// API for time
app.get('/api/time', (req, res) => {
  const time = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
  });

  res.json({
    time: time,
    status: "🚀 Deployed via CI/CD Pipeline TESTTESTESTESTEST"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

