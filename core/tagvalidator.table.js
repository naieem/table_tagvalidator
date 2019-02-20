var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagvalidatorSchema = new Schema({
    tableName:String,
    tag: String,
    shouldValidate:Boolean
});
module.exports = mongoose.model('tagvalidator', tagvalidatorSchema);