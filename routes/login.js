const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.send(`
    <form action="/login" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <button type="submit">Login</button>
    </form>
  `);
});

router.post('/login', (req, res) => {
    const username = req.body.username;
    console.log(username);
  
    const setLocalStorageScript = `
      <script>
        localStorage.setItem('username', '${username}');
        window.location.href = '/';
      </script>
    `;
  
    res.send(setLocalStorageScript);
  });

module.exports = router;
