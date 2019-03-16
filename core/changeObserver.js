var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var changeObserverSchema = new Schema({
    parentTable: { type: String, default: '' },
    parentField: { type: String, default: '' },
    childTable: { type: String, default: '' },
    childField: { type: String, default: '' },
    childQueryField: { type: String, default: '' },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
});
module.exports = changeObserverSchema;