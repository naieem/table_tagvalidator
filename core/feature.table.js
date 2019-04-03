var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var featureSchema = new Schema({
    _id: String,
    featureName: String,
    roles: [String],
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
// module.exports = mongoose.model('Person', personSchema);
module.exports = featureSchema;