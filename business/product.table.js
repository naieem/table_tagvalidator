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
    details:{
        type: String
    },
    model:{
        type: String
    },
    modelYr:{
        type: String
    },
    registration:{
        type: String
    },
    condition:{
        type: String
    },
    transmission:{
        type: String
    },
    bodyType:{
        type: String
    },
    fuelType:{
        type: String
    },
    addressarea:{
        type: String
    },
    engineCapacity:{
        type: String
    },
    kilometersRn:{
        type: Number
    },
    tag: [String],
    files: [{ type: String, ref: 'file' }],
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