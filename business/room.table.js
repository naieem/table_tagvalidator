var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
    _id: String,
    roomType: String,
    roomPrice: String,
    roomNumber: String,
    isAvailable: { type: Boolean, default: true },
    patient: { type: String, ref: 'patient' },
    tag: String,
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String],
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now }
}, { _id: false });
// module.exports = mongoose.model('room', roomSchema);
module.exports=roomSchema;