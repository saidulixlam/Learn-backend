const path = require('path');

exports.getAddProducts = (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
};

exports.postAddProduct = (req,res)=>{
    res.redirect('/');
};

exports.getProduct = (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
};