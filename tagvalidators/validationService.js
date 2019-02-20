var _ = require('lodash');
var falseValidation = [];

module.exports.validate = function (data, validators) {
    falseValidation = [];
    var keys = Object.keys(data);
    validators.forEach((validator) => {
        if (keys.includes(validator.field)) {
            var requestInput = data[validator.field];
            validator.validator.forEach(element => {
                var keyword = element.split('|');
                switch (keyword[0]) {
                    case 'required':
                        if (!requestInput.length)
                            falseValidation.push(false);
                        break;
                    case 'min':
                        minCheck(requestInput, keyword[1]);
                        break;
                    case 'max':
                        maxCheck(requestInput, keyword[1]);
                        break;
                    case 'number':
                        isNumber(requestInput);
                        break;
                    default:
                        break;
                }
            });
        } else {
            falseValidation.push(false);
        }
    });
    return falseValidation.length ? false : true;
}

function minCheck(data, length) {
    if (data.length < length)
        falseValidation.push(false);
}

function maxCheck(data, length) {
    if (data.length > length)
        falseValidation.push(false);
}
function isNumber(data) {
    const NumberRegex = "^[0-9]+$"; // only number
    let numEx = new RegExp(NumberRegex);
    let Numcheck = numEx.test(data);
    if (!Numcheck)
        falseValidation.push(false);
}