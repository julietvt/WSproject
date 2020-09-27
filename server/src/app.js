const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIO(server);
const connectionHandler = require('./ws');
const router = require('./router');
app.use(router);
io.on('connection', connectionHandler);
/*
io.on('connection', function (socket) {
    const handshake = socket.handshake;
    console.log('handshake');
    console.dir(handshake);
    socket.on('test', (data, options) => {
        console.log('data:',data);
        console.log('options:',options);
    });
});
 */
const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=>console.log(`App lintening on port ${PORT}`));

/*
const express = require('express');
const app = express();
const expressWS = require('express-ws')(app);
const gWss = expressWS.getWss('/');
app.use(express.json());
const messages = [];
app.ws('/', function(ws, req) {
    ws.send(JSON.stringify(messages));
    ws.on('message', function(msg) {
        console.log(msg);
        messages.push(msg);
        gWss.clients.forEach(function (client) {
            client.send(JSON.stringify([msg]));
        });
    });
    console.log('socket', req.testing);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`App lintening on port ${PORT}`));
*/