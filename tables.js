// core tables
var usertable = require('./core/user.table');
var personTable = require('./core/person.table');
var roleTable = require('./core/role.table');
var userreadabledata = require('./core/userReadable.table');
var tableTable = require('./core/table.table');
var relationship = require('./core/relationship.table');
var relationmapper = require('./core/relationMapper.table');
var infocenter = require('./core/infocenter.table');
var tagValidator = require('./core/tagvalidator.table');
// business tables
var file = require('./business/file.table');
var doctor = require('./business/doctor.table');
var room = require('./business/room.table');
module.exports = {
    user: usertable,
    person: personTable,
    role: roleTable,
    userreadabledata: userreadabledata,
    table: tableTable,
    relationship: relationship,
    relationmapper: relationmapper,
    infocenter: infocenter,
    tagvalidator:tagValidator,// business table starts from here
    file: file,
    doctor: doctor,
    room:room
}