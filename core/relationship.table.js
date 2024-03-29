var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var relationshipMapperSchema = new Schema({
    _id: String,
    parentTableName: { type: String, default: '' },
    childTableName: { type: String, default: '' },
    parentTableId: { type: String, default: '' },
    childTableId: { type: String, default: '' },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
}, { _id: false });
// module.exports = mongoose.model('relationship', relationshipMapperSchema);
module.exports=relationshipMapperSchema