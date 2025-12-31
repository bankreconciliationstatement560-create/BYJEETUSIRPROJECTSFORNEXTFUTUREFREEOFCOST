LINE 1: const express = require('express');
LINE 2: const app = express();
LINE 3: app.use(express.json());
LINE 4: 
LINE 5: app.get('/', (req, res) => {
LINE 6:   res.send('F.AI.APP LIVE! 🚀');
LINE 7: });
LINE 8: 
LINE 9: app.get('/chat', (req, res) => {
LINE 10:  res.send('🤖 Aisha AI Chat Ready!');
LINE 11: });
LINE 12: 
LINE 13: app.post('/chat', (req, res) => {
LINE 14:  res.json({ 
LINE 15:    response: `Hello ${req.body.message || 'User'}! Aisha here 😊`
LINE 16:  });
LINE 17: });
LINE 18: 
LINE 19: const PORT = process.env.PORT || 10000;
LINE 20: app.listen(PORT, () => {
LINE 21:   console.log('🚀 F.AI.APP on port ' + PORT);
LINE 22: });
