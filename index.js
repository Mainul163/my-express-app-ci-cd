const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from DigitalOcean server! 🚀');
});

app.get('/demo', (req, res) => {
  res.json({
    message: 'Hello from demo API! 🚀',
    success: true,
    data: {
      name: 'Mainul',
      city: 'Dhaka'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
