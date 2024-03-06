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

app.use('/success', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
}); 


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
