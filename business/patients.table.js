var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientsSchema = new Schema({
    _id: String,
    name: String,
    age: Number,
    address: String,
    email: String,
    phone: String,
    availableTimes: [String],
    email: { type: String },
    room: { type: String, ref: 'room' },
    tag: String,
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
}, { _id: false });
module.exports = mongoose.model('patient', patientsSchema);