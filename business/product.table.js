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
    idsAllowedToUpdate: [String],
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now }
}, { _id: false });
// module.exports = mongoose.model('product', personSchema);
module.exports=personSchema;