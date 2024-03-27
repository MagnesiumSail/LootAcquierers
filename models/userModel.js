const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-zA-Z0-9_-]+$/, // Allows letters, numbers, underscores, and dashes
      lowercase: true,
      select: false // Will not include this field in query results by default
    },
    key: {
      type: String,
      required: true,
      select: false,
      unique: true
    },
    inventory: {
      type: Schema.Types.ObjectId,
      ref: 'Inventory', // References the Inventory model
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically sets to current date/time when creating a document
      select: false,
      required: true
    }
  });