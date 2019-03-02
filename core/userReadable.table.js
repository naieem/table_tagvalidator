var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userReadableSchema = new Schema({
    _id: String,
    tableName: { type: String },
    readableFields: [String]
}, { _id: false });
// module.exports = mongoose.model('userreadabledata', userReadableSchema);
module.exports=userReadableSchema;