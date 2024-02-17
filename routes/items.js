const express = require('express');
const router = express.Router();
const ItemsController = require('../controllers/ItemsController');

// GET all items
router.get('/', ItemsController.getAllItems);

// GET a single item by ID
router.get('/:id', ItemsController.getSingleItem);

// POST a new item
router.post('/', ItemsController.createItem);

// PUT update an existing item
router.put('/:id', ItemsController.updateItem);

// DELETE an item
router.delete('/:id', ItemsController.deleteItem);

module.exports = router;
