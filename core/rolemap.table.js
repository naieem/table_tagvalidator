var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rolemapSchema = new Schema({
    _id: String,
    rolename: { type: String, default: '' },
    parents: [String],
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
}, { _id: false });
// module.exports = mongoose.model('role', roleSchema);
module.exports = rolemapSchema;