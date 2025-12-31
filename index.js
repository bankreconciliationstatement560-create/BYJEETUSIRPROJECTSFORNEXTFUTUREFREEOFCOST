const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI('AIzaSyBOJ5qVvlWhq6yO8aPqLR4MKbV4kOHX8o4');

app.get('/', (req, res) => {
  res.send('F.AI.APP LIVE! 🚀');
});

app.get('/chat', (req, res) => {
  res.send('🤖 Aisha AI Chat Ready!');
});

app.post('/chat', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(req.body.message || "Hello");
    const response = await result.response;
    res.json({ response: response.text() });
  } catch (error) {
    console.error(error);
    res.json({ response: 'Hello from Aisha! AI busy right now 😊' });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log('🚀 F.AI.APP running on port ' + PORT);
});
