const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/add-product', (req, res) => {
  res.send(`
        <form action="/add-product" method="post">
            <label for="product">Product Name:</label>
            <input type="text" id="product" name="product">
            <br>
            <label for="size">Product Size:</label>
            <input type="text" id="size" name="size">
            <br>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/add-product', (req, res) => {
  const productName = req.body.product;
  const productSize = req.body.size;
  console.log('Product Name:', productName);
  console.log('Product Size:', productSize);
  // res.send('Product added successfully!');
  res.send(productName+ ' '+productSize);
});

app.listen(3000);

