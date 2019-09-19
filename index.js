const http = require('http');
const express = require('express');
const app = express();

//--------------------------------------------------------------

var pubnub_module = require('./pubnub_module');

//--------------------------------------------------------------

app.post('/publish', (req, res) => {

    var channelName = "channelName";
    var message = {
        author: 'Laxman',
        mobile: '8050093155',
        email: 'laxman810@gmail.com'
    }
    pubnub_module.notifyPunbun({
        listner: channelName,
        message: message
    });

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end({err: 0, data: "success"});
});


//--------------------------------------------------------------

http.createServer(app).listen(1234, () => {
    console.log('server listening on port 1234');
});