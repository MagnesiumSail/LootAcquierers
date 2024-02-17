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
}, 
{
    versionKey: false,
    collection: 'Items'
});

module.exports = mongoose.model('ItemModel', ItemSchema);
