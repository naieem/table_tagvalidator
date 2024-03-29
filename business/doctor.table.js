var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var doctorSchema = new Schema({
    _id: String,
    name: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    designation: {
        type: String
    },
    availableTimes:[String],
    email: { type: String },
    tag:String,
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String],
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now }
}, { _id: false });
// module.exports = mongoose.model('doctor', doctorSchema);
module.exports=doctorSchema;