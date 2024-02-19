const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, I am Titi!');
  console.log('My name is Titi. Someone visited the server!');
});

const PORT = 4000;
server.listen(PORT, () => {
  
});
