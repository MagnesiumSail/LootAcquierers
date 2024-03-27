const express = require('express');
const router = express.Router();
const AccountsController = require('../controllers/AccountsController');

//Request New Key
router.get('/requestKey', AccountsController.requestNewKey);

module.exports = router;