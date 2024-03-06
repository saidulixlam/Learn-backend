const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// const login = require('./routes/login');
// const message = require('./routes/msg');

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(login);
// app.use(message);

const admin = require('./routes/admin');
const shop = require('./routes/shop');
const contact = require('./routes/contact');

app.use(admin);
app.use(shop);
app.use(contact);

const errorController = require('./controllers/errorController');
const successController = require('./controllers/successController')
app.use('/success',successController.success );

app.use(errorController.get404); 


app.listen(4000, () => {
  console.log('Server is running on port 3000');
});
