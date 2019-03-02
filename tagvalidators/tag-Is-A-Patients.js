var validationService = require('./validationService');
// var validators = [{
//     field: 'name',
//     validator: ['required', 'min|10', 'max|20']
// }, {
//     field: 'address',
//     validator: ['required', 'min|10', 'max|20']
// }, {
//     field: 'phone',
//     validator: ['required', 'number']
// }];

module.exports = {
    validate: init
};

function init(data) {
    return new Promise((resolve, reject) => {
        if (data && data._id) {
            tables[origin]['patient'].find({
                _id: data._id
            }, (err, patients) => {
                if (!err && patients.length) {
                    console.log('patients found');
                    if (patients[0].room) {
                        var updateRommInfo = {
                            isAvailable: true
                        }
                        checkRoomAvailability(data).then((response) => {
                            if (response) {
                                updateRoomData(patients[0].room, updateRommInfo).then((result) => {
                                    resolve(result);
                                });
                            } else {
                                console.log('room availability failed');
                                resolve(response);
                            }
                        });
                    }
                }
            });
        }
        if (data.room) {

        }
        // var validationResult = validationService.validate(data, validators);
        // resolve(validationResult);
    });
}

function checkRoomAvailability(data) {
    return new Promise((resolve, reject) => {
        tables[origin]['room'].find({
            _id: data.room
        }, (err, result) => {
            console.log('room result found');
            console.log('number of room found is ' + result.length);
            if (!err && result && result.length && result.length < 2) {
                console.log('room availability ' + result[0].isAvailable);
                if (result[0].isAvailable)
                    resolve(true);
            } else {
                console.log('Error occoured saying ' + err);
                resolve(false);
            }
        });
    });
}

function updateRoomData(roomId, data) {
    console.log('room info update called');
    return new Promise((resolve, reject) => {
        tables[origin]['room'].updateOne({
            _id: roomId
        }, data, (err, response) => {
            if (err) {
                console.log(err);
                return resolve(false);
            }
            if (response.ok) {
                console.log('room info update done');
                resolve(true);
            }
        });
    });

}