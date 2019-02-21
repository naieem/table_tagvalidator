var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
    _id: String,
    roomType:String,
    roomPrice:String,
    roomNumber:String,
    tag:String,
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
}, { _id: false });
module.exports = mongoose.model('room', roomSchema);