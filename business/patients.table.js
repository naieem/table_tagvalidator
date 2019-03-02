var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientsSchema = new Schema({
    _id: String,
    name: String,
    age: Number,
    address: String,
    email: String,
    phone: String,
    email: { type: String },
    room: { type: String, ref: 'room' },
    doctors: [{ type: String, ref: 'doctor' }],
    tag: String,
    admissionDate: { type: Date, default: Date.now },
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String],
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now }
}, { _id: false });
// module.exports = mongoose.model('patient', patientsSchema);
module.exports=patientsSchema;