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