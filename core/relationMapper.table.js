var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var relationMapperSchema = new Schema({
    _id: String,
    parentTableName: { type: String, default: '' },
    childTableName: { type: String, default: '' },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
}, { _id: false });
// module.exports = mongoose.model('relationmapper', relationMapperSchema);
module.exports=relationMapperSchema;