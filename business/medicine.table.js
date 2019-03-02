var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicineSchema = new Schema({
    _id: String,
    name: {
        type: String
    },
    brand: {
        type: String
    },
    quantity: {
        type: Number
    },
    price:Number,
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
}, { _id: false });
// module.exports = mongoose.model('medicine', medicineSchema);
module.exports=medicineSchema;