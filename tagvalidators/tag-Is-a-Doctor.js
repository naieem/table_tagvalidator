var validationService = require('./validationService');
var validators = [{
    field: 'name',
    validator: ['required', 'min|10', 'max|20']
}, {
    field: 'address',
    validator: ['required', 'min|10', 'max|20']
}, {
    field: 'phone',
    validator: ['required', 'number']
}];

module.exports = {
    validate: init
};

function init(data) {
    return new Promise((resolve, reject) => {
        var validationResult = validationService.validate(data, validators);
        if (!validationResult) {
            resolve(false);
        } else {
            resolve(true);
        }
    });
}