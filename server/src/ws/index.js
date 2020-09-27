const {testHandler,messageHandler}=require('./eventHandler');
module.exports = function connectionHandler(socket) {
    socket.on('test',testHandler);
    socket.on('message',messageHandler);
};