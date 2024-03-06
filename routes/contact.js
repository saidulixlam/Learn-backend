const express =require("express");

const path = require("path");

const router = express.Router();

router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'));
});

router.post('/contact',(req,res)=>{
    res.redirect('/success');
});

module.exports = router;