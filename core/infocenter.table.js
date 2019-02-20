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
    idsAllowedToUpdate: [String]
}, { _id: false });
module.exports = mongoose.model('infocenter', infoCenterSchema);