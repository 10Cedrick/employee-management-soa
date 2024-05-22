const express = require('express');

const router = express.Router();


//----------------------
// API routes
//----------------------
router.get('/', (req, res) => {
    res.json({message: 'Hello api from service Employee! 🌈🌈'});
});
router.use('/employees', require('./employee.route'));

module.exports = router;