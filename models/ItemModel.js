const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    types: {
        type: String,
        required: true
    },
    origins: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
    }
}, 
{
    versionKey: false,
    collection: 'Items'
});

module.exports = mongoose.model('ItemModel', ItemSchema);
