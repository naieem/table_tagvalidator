// core tables
var usertable = require("./core/user.table");
var personTable = require("./core/person.table");
var roleTable = require("./core/role.table");
var userreadabledata = require("./core/userReadable.table");
var tableTable = require("./core/table.table");
var relationship = require("./core/relationship.table");
var relationmapper = require("./core/relationMapper.table");
var infocenter = require("./core/infocenter.table");
var tagValidator = require("./core/tagvalidator.table");
var changeObserver = require("./core/changeObserver");
var rolemap = require("./core/rolemap.table");
var feature = require("./core/feature.table");
// business tables
var file = require("./business/file.table");
var doctor = require("./business/doctor.table");
var room = require("./business/room.table");
var patients = require("./business/patients.table");
var medicine = require("./business/medicine.table");
var test = require("./business/test.table");
var task = require("./business/task.table");
var market = require("./business/market.table");
var product = require("./business/product.table");
module.exports = [{
        name: "user",
        schema: usertable
    },
    {
        name: "person",
        schema: personTable
    },
    {
        name: "role",
        schema: roleTable
    },
    {
        name: "changeobserver",
        schema: changeObserver
    },
    {
        name: "userreadabledata",
        schema: userreadabledata
    },
    {
        name: "table",
        schema: tableTable
    },
    {
        name: "relationship",
        schema: relationship
    },
    {
        name: "relationmapper",
        schema: relationmapper
    },
    {
        name: "infocenter",
        schema: infocenter
    },
    {
        name: "file",
        schema: file
    },
    {
        name: "doctor",
        schema: doctor
    },
    {
        name: "room",
        schema: room
    },
    {
        name: "patient",
        schema: patients
    },
    {
        name: "medicine",
        schema: medicine
    },
    {
        name: "tagvalidator",
        schema: tagValidator
    },
    {
        name: "test",
        schema: test
    },
    {
        name: "rolemap",
        schema: rolemap
    },
    {
        name: "feature",
        schema: feature
    },
    {
        name: "task",
        schema: task
    },
    {
        name: "market",
        schema: market
    },
    {
        name: "product",
        schema: product
    }
];