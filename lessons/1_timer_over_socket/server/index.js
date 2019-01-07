const io = require('socket.io')();

// use .emit to publish events
// use .on to subscribe to events

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  })
})

const port = 8000;
io.listen(8000);
console.log('listening on port ', port);