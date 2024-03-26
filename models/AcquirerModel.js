const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const acquirerSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    rarity: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      enum: ['common', 'uncommon', 'rare', 'legendary', 'exotic'],
    },
    origin: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    quality: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
      enum: ['broken', 'worn', 'used', 'normal', 'new', 'mint', 'perfect'], // Assuming these are your quality levels
    },
    challengeType: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      enum: ['math', 'sort'],
    },
  }, {
    versionKey: false,
    collection: 'Acquirers',
    timestamps: true, // Automatically manage creation and update timestamps
  });

module.exports = mongoose.model('AcquirerModel', acquirerSchema);
