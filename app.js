const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Last time " + new Date().toString());
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
