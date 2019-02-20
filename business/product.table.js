var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    _id: String,
    name: {
        type: String
    },
    price: {
        type: Number
    },
    brand: {
        type: String
    },
    sku: {
        type: String
    },
    quantity: {
        type: Number
    },
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
}, { _id: false });
module.exports = mongoose.model('product', personSchema);