const path = require('path');

exports.getContact = (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'));
};

exports.postContact = (req,res)=>{
    res.redirect('/success');
};