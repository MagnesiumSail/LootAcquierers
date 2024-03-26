const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    types: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    origins: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    rarity: {
      type: String,
      required: true, //Item Rarity Required
      trim: true,
      lowercase: true,
      enum: ['common', 'uncommon', 'rare', 'legendary', 'exotic'], //Allowed Values
    },
    quality: {
        type: String,
        required: false,
        trim: true,
        lowercase: true,
        enum: ['broken', 'worn', 'used', 'normal', 'new', 'mint', 'perfect'], //Allowed Values
    }
  }, {
    versionKey: false,
    collection: 'Items',
  });

module.exports = mongoose.model('ItemModel', ItemSchema);

// Get single Item
//THIS NEEDS TESTING **UNTESTED**
const getItem = async (req, res) => {
  try {
    const returnedItem = await ItemModel.findById(req.params.id);
    if (!returnedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(returnedItem);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}