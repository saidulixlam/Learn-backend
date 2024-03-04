const express = require('express');
const router = express.Router();
const data = require('./data');

router.get('/', (req, res) => {
  const messages = data.getMessages();
  res.send(
    `
    <h2>Messages</h2>
    <ul>
      ${messages.map(message => `<li>${message.username}: ${message.message}</li>`).join('')}
    </ul>
    <form action="/" method="post" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
      <label for="message">Message:</label>
      <input type="text" id="message" name="message" required>
      <input type="hidden" name="username" id="username"/> 
      <button type="submit">Send Message</button>
    </form>
  `);
});

router.post('/',(req,res)=>{
  const username = req.body.username;
  const message = req.body.message;

  data.addMessage(username, message);

  res.redirect('/');
})

module.exports = router;
