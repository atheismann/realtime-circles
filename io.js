var io = require('socket.io')();
 
// Listen for new connections from clients (socket)
io.on('connection', function (socket) {
  socket.on('add-circle', function(data){
    io.emit('add-circle', data);
  });
  socket.on('clear', function(){
    io.emit('clear');
  });
});

// io represents socket.io on the server - let's export it
module.exports = io;