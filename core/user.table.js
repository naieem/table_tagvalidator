var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: String,
    username: String,
    password: String,
    person_id: String,
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
}, { _id: false });
module.exports = mongoose.model('User', userSchema);