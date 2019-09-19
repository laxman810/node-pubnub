var pubnub = require('./pubnub');

module.exports.notifyPunbun = function (request) {
    pubnub.publish(request.listner, request.message, function (resp) {
        return resp;
    });
}