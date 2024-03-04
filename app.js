const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const login = require('./routes/login');
const message = require('./routes/msg');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(login);
app.use(message);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
