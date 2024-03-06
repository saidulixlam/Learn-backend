const path = require('path');
exports.success = (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'success.html'));
};