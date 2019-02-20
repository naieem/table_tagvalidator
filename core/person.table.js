var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    _id: String,
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    email: { type: String, default: '' },
    designation: { type: String, default: '' },
    gender: { type: String, default: '' },
    company: { type: String, default: '' },
    user_id: { type: String, default: '' },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
    roles: [String],
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
}, { _id: false });
module.exports = mongoose.model('Person', personSchema);