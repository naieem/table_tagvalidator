var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var defaultPermissionSchema = new Schema({
    rolesAllowedToRead: [String],
    rolesAllowedToWrite: [String],
    rolesAllowedToUpdate: [String],
});
/*
    "defaultPermission" : {
        "rolesAllowedToRead" : [ 
            "admin"
        ],
        "rolesAllowedToWrite" : [ 
            "admin"
        ],
        "rolesAllowedToUpdate" : [ 
            "admin"
        ],
        "idsAllowedToRead" : [ 
            "owner"
        ],
        "idsAllowedToWrite" : [ 
            "owner"
        ],
        "idsAllowedToUpdate" : [ 
            "owner"
        ]
    }
*/
var table = new Schema({
    _id: String,
    tableName: { type: String, default: '' },
    defaultPermission: { type: Schema.Types.Mixed },
    defaultRolesToWrite: [String],
    defaultRolesToRead: [String],
    defaultRolesToUpdate: [String],
}, { _id: false });
// module.exports = mongoose.model('table', table);
module.exports=table;