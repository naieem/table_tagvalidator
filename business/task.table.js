var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    _id: String,
    title: String,
    tag: String,
    description: String,
    files: [{ type: String, ref: 'file' }],
    status: String,
    affectedCustomer: String,
    isRepeated: { type: Boolean, default: false },
    repeatRelatedTicketId: String,
    posted_at: { type: Date },
    resolved_at: { type: Date },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String],
}, { _id: false });
// module.exports = mongoose.model('task', taskSchema);
module.exports = taskSchema;