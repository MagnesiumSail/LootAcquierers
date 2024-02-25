const express = require('express');
const router = express.Router();
const AcquirersController = require('../controllers/AcquirerController');

// GET all acquirers
router.get('/', AcquirersController.getAllAcquirers);

// GET a single acquirer by ID
router.get('/:id', AcquirersController.getSingleAcquirer);

// POST a new acquirer
router.post('/', AcquirersController.createAcquirer);

// PUT update an existing acquirer
router.put('/:id', AcquirersController.updateAcquirer);

// DELETE an acquirer
router.delete('/:id', AcquirersController.deleteAcquirer);

module.exports = router;