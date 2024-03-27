const express = require('express');
const router = express.Router();
const ItemsController = require('../controllers/ItemsController');

// GET all items
router.get('/', ItemsController.getAllItems);

// GET a single item by ID
router.get('/:id', ItemsController.getSingleItem);

module.exports = router;
