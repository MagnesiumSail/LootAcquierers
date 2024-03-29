const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//static inventory model - no changing elements
//just references the database dictionary.
const ItemSchema = new Schema({
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
      type: [String],
      required: true,
      trim: true,
      lowercase: true
    },
    origins: {
      type: [String],
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
    // TODO: Quality needs to be moved into inventory
    /*
    quality: {
        type: String,
        required: false,
        trim: true,
        lowercase: true,
        enum: ['broken', 'worn', 'used', 'normal', 'new', 'mint', 'perfect'], //Allowed Values
    }
    */
  }, {
    versionKey: false,
    collection: 'Items',
  });

module.exports = mongoose.model('ItemModel', ItemSchema);