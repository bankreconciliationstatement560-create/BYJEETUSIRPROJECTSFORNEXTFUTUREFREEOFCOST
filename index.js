const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('F.AI.APP LIVE! 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
app.get('/chat', (req, res) => {
  res.send('🤖 Aisha AI Chat Ready!');
});

app.post('/chat', (req, res) => {
  res.json({ response: 'Hello from Aisha! ' + req.body.message });
});
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyBOJ5qVvlWhq6yO8aPqLR4MKbV4kOHX8o4');

app.post('/chat', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(req.body.message);
    const response = await result.response;
    res.json({ response: response.text() });
  } catch (error) {
    res.json({ response: 'Sorry, something went wrong!' });
  }
});
