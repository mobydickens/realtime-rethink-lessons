import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

//initialize timer on service and subscribe to values
function subscribeToTimer(cb) {
  socket.on('timer', (timestamp) => cb(timestamp));
  socket.emit('subscribeToTimer', 1000);
}

export {
  subscribeToTimer
};