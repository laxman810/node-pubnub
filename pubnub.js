var config = require('./config.json');


var pubnub = require("pubnub")({
    ssl: false, // <- enable TLS Tunneling over TCP
    publish_key: config.PUBNUB_PUBLISH_KEY,
    subscribe_key: config.PUBNUB_SUBSCRIBE_KEY
});


module.exports = {
    pubnub: pubnub
}

module.exports.publish = function (channel, data, callback) {

    pubnub.publish({
        channel: channel,
        message: data,
        callback: function (e) {
        },
        error: function (e) {
            console.log("FAILED! RETRY PUBLISH!", e);
        }
    });
}
