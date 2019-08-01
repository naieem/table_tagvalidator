var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var siteSchema = new Schema({
    sitename: { type: String, default: '' },
    tenantstring: { type: String, default: '' },
    verifyEmailUrl: { type: String, default: '' }
});
module.exports = mongoose.model('site', siteSchema);