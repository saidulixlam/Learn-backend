const express =require("express");

const path = require("path");

const router = express.Router();

const productController = require('../controllers/productController');

router.get('/add-product',productController.getAddProducts);

router.post('/add-product',productController.postAddProduct);

module.exports = router;