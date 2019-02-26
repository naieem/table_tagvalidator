var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var infoCenterSchema = new Schema({
    _id: String,
    metaInfo: {
        key: String,
        value: String
    },
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
module.exports = mongoose.model('infocenter', infoCenterSchema);