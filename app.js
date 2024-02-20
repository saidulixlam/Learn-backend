const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  let response;
  if (url == '/home') {
    response = "Welcome to home";
  } else if (url == '/about') {
    response = "Welcome to my about";
  } else if (url == '/node') {
    response = "Welcome to my Node";
  } else if (url === '/') {
    response = "Welcome to ghar";
  } else {
    response = "404 Not Found";
    res.statusCode = 404;
  }
  res.end(response);

});

const PORT = 4000;
server.listen(PORT, () => {

});
