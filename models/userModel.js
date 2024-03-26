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
    acquirers: {
      type: [ObjectId],
      required: true,
      ref: 'Acquirers', // Example: Reference to another collection, adjust as necessary
      select: false,
    },
    items: {
      type: [ObjectId],
      required: true,
      ref: 'Items',
      select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically sets to current date/time when creating a document
      select: false,
      required: true
    }
  });