const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('F.AI.APP LIVE! 🚀');
});

app.get('/chat', (req, res) => {
  res.send('🤖 Aisha AI Chat Ready!');
});

app.post('/chat', (req, res) => {
  res.json({ 
    response: `Hello ${req.body.message || 'User'}! Aisha here 😊`
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log('🚀 F.AI.APP on port ' + PORT);
});
