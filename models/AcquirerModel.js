const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AcquirerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    quality: {
        type: String,
        required: true
    },
    challengeType: {
        type: String,
        required: true
    },

}, 
{
    versionKey: false,
    collection: 'Acquirers'
});

module.exports = mongoose.model('AcquirerModel', AcquirerSchema);
