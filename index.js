const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const genAI = new GoogleGenerativeAI('AIzaSyBOJ5qVvlWhq6yO8aPqLR4MKbV4kOHX8o4');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>F.AI.APP - Free Premium AI Chat</title>
    <style>body{font-family:Arial;background:linear-gradient(45deg,#ff6b6b,#4ecdc4);color:white;text-align:center;padding:50px;}
    .chatbox{width:80%;height:400px;border-radius:20px;background:rgba(255,255,255,0.1);margin:20px auto;padding:20px;overflow-y:scroll;}
    input{width:70%;padding:15px;border:none;border-radius:25px;font-size:16px;}
    button{padding:15px 30px;background:#ff6b6b;color:white;border:none;border-radius:25px;font-size:16px;cursor:pointer;}
    .message{margin:10px 0;padding:10px;border-radius:15px;background:rgba(255,255,255,0.2);}
    </style></head>
    <body>
    <h1>🤖 F.AI.APP - Free Premium AI Chat</h1>
    <div id="chatbox" class="chatbox"></div>
    <input id="message" type="text" placeholder="Type your message...">
    <button onclick="sendMessage()">Send</button>
    <script>
    async function sendMessage(){ 
      const input=document.getElementById('message');
      const chatbox=document.getElementById('chatbox');
      const msg=input.value;
      if(!msg) return;
      
      chatbox.innerHTML+=`<div class="message"><strong>You:</strong> ${msg}</div>`;
      input.value='';
      
      const res=await fetch('/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:msg})});
      const data=await res.json();
      chatbox.innerHTML+=`<div class="message"><strong>Aisha:</strong> ${data.response}</div>`;
      chatbox.scrollTop=chatbox.scrollHeight;
    }
    document.getElementById('message').addEventListener('keypress',(e)=>{if(e.key==='Enter') sendMessage();});
    </script>
    </body></html>
  `);
});

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    res.json({ response: text });
  } catch (error) {
    res.json({ response: 'Sorry, something went wrong! 😅' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 F.AI.APP running on port ${PORT}`);
});
