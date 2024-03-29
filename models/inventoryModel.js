const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Make quality a dynamic attribute, along with added date.
const inventorySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        itemRef: { type: Schema.Types.ObjectId, ref: "Item" },
        rarity: {
          type: String,
          enum: ["common", "uncommon", "rare", "legendary", "exotic"],
          default: () => getRandomRarity(),
        },
        quality: {
          type: String,
          enum: ['broken', 'worn', 'used', 'normal', 'new', 'mint', 'perfect'],
          default: () => getRandomQuality(),
        },
      },
    ],
    acquirers: [
      {
        acquirerRef: { type: Schema.Types.ObjectId, ref: "Acquirer" },
        rarity: {
          type: String,
          enum: ["common", "uncommon", "rare", "legendary", "exotic"],
          default: () => getRandomRarity(),
        },
        quality: {
          type: String,
          enum: ['broken', 'worn', 'used', 'normal', 'new', 'mint', 'perfect'],
          default: () => getRandomQuality(),
        },
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

module.exports = mongoose.model("Inventory", inventorySchema);
