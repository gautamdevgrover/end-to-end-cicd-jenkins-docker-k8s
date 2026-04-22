const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("New Current Time 14:55551 is: " + new Date().toString());
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
