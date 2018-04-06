var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'Rebecca',
    text: 'Hey. You free next weekend'
  });

  socket.emit('createMessage', {
    from: 'Kevin',
    text: 'Sounds great. Looking forward to it'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
  console.log('New email', email);
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
