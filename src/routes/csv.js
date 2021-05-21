const express = require('express');
const router = express.Router();
const csvCTRL = require('../controllers/csv.controller');


router.get('/csv', csvCTRL.bulkInsert)




module.exports = router