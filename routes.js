const fs = require('fs');

const requestHandlers = (req,res)=>{
    const url = req.url;
  const method = req.method;

  if (url === '/') {
    // Read messages from file
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        return res.end('Internal Server Error');
      }

      console.log(data);
      const messages = data ? data.split('\n').filter(msg => msg.trim() !== '') : [];

      res.write('<html>');
      res.write('<head><title>Message</title></head>');
      res.write('<body>');
      res.write(`<h1>${data}</h1>`);
      res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form>');
      res.write('</body></html>');
      return res.end();
    });
  }

  else if (url === '/message' && method === 'POST') {
    // Handle form submission
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsed = Buffer.concat(body).toString();
      const message = parsed.split('=')[1];

      // Append the new message to the file
      fs.appendFile('message.txt', message + '\n', 'utf8', (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          return res.end('Internal Server Error');
        }

        // Redirect to the home page after adding a message
        res.writeHead(302, { 'Location': '/' });
        return res.end();
      });
    });
  }
}

module.exports=requestHandlers;