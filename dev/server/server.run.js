'use strict';

const express = require('express');
let app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (message) => {
    console.log('USER WROTE:', message);
  });

  socket.on('disconnect', (socket) => {
    console.log('a user disconnected');
  });


});



http.listen(4488, () => {
  console.log('listening on port 3344');
});
