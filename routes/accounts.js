const express = require('express');
const router = express.Router();
const AccountsController = require('../controllers/AccountsController');

// Login
router.get('/login', AccountsController.login);

// Callback
router.get('/callback', AccountsController.callback);

// Logout
router.get('/logout', AccountsController.logout);

module.exports = router;