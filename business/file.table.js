var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
    _id: String,
    fileName:{ type: String, default: '' },
    metaData:Schema.Types.Mixed,
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
}, { _id: false });
// module.exports = mongoose.model('file', fileSchema);
module.exports=fileSchema;