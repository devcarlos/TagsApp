//handle global.users
global.users = {};

module.exports = (socket) => {
  socket.on('connected', (data) => connect(socket, data));
  socket.on('list', (data) => list(socket, data));
  socket.on('disconnected', (data) => disconnect(socket, data));
}

//++++++++++++++++++++++++++++++++++++
//++++++++  HELPER FUNCTIONS  ++++++++
//++++++++++++++++++++++++++++++++++++

function list(socket, data) {
  console.log(' -- SOCKET LIST --')

  if (socket) {
    console.log('list data => ', data);
    socket.broadcast.emit('list', data);
  } else {
    console.log('Socket Invalid: LIST')
  }
}

function connect(socket, user) {
  if (socket) {
    console.log(' -- SOCKET CONNECT --')
    global.users[socket.id] = user;
    console.log('user is connected...')
    console.log('user => ', user);
    console.log('users => ', global.users);
    socket.emit('users', global.users);  
  } else {
    console.log('Socket Invalid: CONNECT')
  }
}

function disconnect(socket, data) {
  console.log(' -- SOCKET DISCONNECT --')
  if (socket) {
    let user = global.users[socket.id];
    //do something to disconnect
    console.log('user disconnected => ', user)
    console.log('users => ', global.users);

    delete global.users[socket.id];
    socket.emit('users', global.users);
  } else {
    console.log('Socket Invalid: DISCONNECT')
  }
}
