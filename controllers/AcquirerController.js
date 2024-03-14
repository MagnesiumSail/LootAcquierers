const Item = require('../models/ItemModel');
const Acquirer = require('../models/AcquirerModel');





/*
// GET all acquirers
const getAllAcquirers = async (req, res) => {
  try {
    const acquirers = await Acquirer.find();
    res.json(acquirers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET a single acquirer by ID
const getSingleAcquirer = async (req, res) => {
  try {
    const acquirer = await Acquirer.findById(req.params.id);
    if (!acquirer) {
      return res.status(404).json({ message: 'Acquirer not found' });
    }
    res.json(acquirer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// POST a new acquirer
const createAcquirer = async (req, res) => {
  try {
    console.log(req.body);
    const newAcquirer = new Acquirer(req.body); // Assumes req.body is already validated
    const acquirer = await newAcquirer.save();
    res.status(201).json(acquirer);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating acquirer' });
  }
};

// PUT update an existing acquirer
const updateAcquirer = async (req, res) => {
    try {
      const acquirer = await Acquirer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!acquirer) {
            return res.status(404).json({ message: 'Acquirer not found' });
        }
        res.json(acquirer);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

//DELETE an acquirer
const deleteAcquirer = async (req, res) => {
    try {
        const acquirer = await Acquirer.findByIdAndDelete(req.params.id);
        if (!acquirer) {
            return res.status(404).json({ message: 'Acquirer not found' });
        }
        res.json(acquirer);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
  getAllAcquirers,
  getSingleAcquirer,
  createAcquirer,
  updateAcquirer,
  deleteAcquirer
};
*/