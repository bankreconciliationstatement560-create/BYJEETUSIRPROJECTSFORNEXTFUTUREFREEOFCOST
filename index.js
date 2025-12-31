LINE 1: const express = require('express');
LINE 2: const { GoogleGenerativeAI } = require('@google/generative-ai');
LINE 3: 
LINE 4: const app = express();
LINE 5: app.use(express.json());
LINE 6: 
LINE 7: const genAI = new GoogleGenerativeAI('AIzaSyBOJ5qVvlWhq6yO8aPqLR4MKbV4kOHX8o4');
LINE 8: 
LINE 9: app.get('/', (req, res) => {
LINE 10:   res.send('F.AI.APP LIVE! 🚀 GEMINI 3');
LINE 11: });
LINE 12: 
LINE 13: app.get('/chat', (req, res) => {
LINE 14:   res.send('🤖 Aisha AI Chat Ready! GEMINI 3');
LINE 15: });
LINE 16: 
LINE 17: app.post('/chat', async (req, res) => {
LINE 18:   try {
LINE 19:     const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
LINE 20:     const result = await model.generateContent(req.body.message || "Hello");
LINE 21:     const response = await result.response;
LINE 22:     res.json({ response: response.text() });
LINE 23:   } catch (error) {
LINE 24:     console.error(error);
LINE 25:     res.json({ response: 'Aisha here! 🔥 GEMINI 3 ready!' });
LINE 26:   }
LINE 27: });
LINE 28: 
LINE 29: const PORT = process.env.PORT || 10000;
LINE 30: app.listen(PORT, () => {
LINE 31:   console.log('🚀 F.AI.APP GEMINI 3 on port ' + PORT);
LINE 32: });
