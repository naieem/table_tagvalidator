var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var testSchema = new Schema(
  {
    _id: String,
    patientType:String,
    patientId: { type: String, ref: "patient" },
    patientName: String,
    patientPhone: String,
    patientAddress: String,
    testType: String,
    testPrice: Number,
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
    idsAllowedToRead: [String],
    idsAllowedToWrite: [String],
    idsAllowedToUpdate: [String]
  },
  { _id: false }
);
// module.exports = mongoose.model('medicine', medicineSchema);
module.exports = testSchema;
