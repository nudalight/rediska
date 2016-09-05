'use strict';

const redis = require('redis');
const express = require('express');
let app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let subs = {}, pub = redis.createClient();



app.use(express.static('./'));
let port = 4499;

http.listen(port, () => {
  console.log('listening on port', port);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {

  subs[socket.id] = redis.createClient();
  console.log('a user connected, socket_id:', socket.id);

  subs[socket.id].on('message',  subsOnMessageHandler);

  socket.on('channel:join', socketChannelJoinHandler);
  socket.on('channel:post', socketChannelPostHandler);
  socket.on('channel:posts', socketChannelPostsHandler);
  socket.on('disconnect', socketDisconnectHandler);
  socket.on('error', socketErrorHandler);





  function socketChannelPostsHandler(data){

    pub.lrange(data.channel, 0, -1, (err, posts) => {

      if (err) return err;

      console.log('GIVE POSTS:', posts);
      socket.emit('channel:posts', posts);

    });

  }


  function socketDisconnectHandler(socket){
    console.log('a user disconnected');
  }


  function socketErrorHandler(err){
    console.log('SOCKET:ERROR:', err);

  }



  function socketChannelPostHandler(msg){

    console.log('GOT:', msg);
    msg.timestamp = +new Date();

    let jsonData = JSON.stringify(msg);

    pub.publish(msg.channel, jsonData);


    //*******


    pub.lrange(msg.channel, 0, -1, function callback(err, reply){

      console.log('ALREADY IN DB:', reply);

      // let updated = [];
      // updated.push('for test');
      // updated.push(msg);


      let m1 = [JSON.stringify(msg)];
      // console.log('BEFORE WRITE:', m1);

      pub.lpush(msg.channel, m1, function callback(err, reply){

        if (err) console.log('LPUSHERR:', err);

        console.log('DONE LPUSH', reply);

        // pub.smembers(msg.channel, (err, reply) => {
        //   if (err) console.log('GETERR', err);
        //   console.log('AFTER WRITE:', reply);
        //
        // });

        pub.lrange(msg.channel, 0, -1, function callback(err, reply){

          if (err) console.log('errRange:', err);
          console.log('AFTER LPUSH:', reply);

        });

      });



      // pub.del(msg.channel);




      // pub.set(msg.channel, updated, function callback(err, reply){
      //   if (err) return err;
      //
      //   console.log('ATTEMPT:', reply);
      //
      //   pub.get(msg.channel, function callback(err, reply){
      //     if (err) return err;
      //     console.log('AFTER WRITE:', JSON.parse(reply));
      //
      //   });
      // });

    });






    // pub.hmset(msg.channel, {
    //   'javascript': 'AngularJS',
    //   'css': 'Bootstrap',
    //   'node': 'Express'
    // }, function callback(err, reply){
    //
    //   if (err) return err;
    //   console.log('wrote object:', reply);
    //
    //   pub.hgetall(msg.channel, (err, obj) => {
    //     console.log('CHECKED:', obj);
    //   });
    //
    // });


    // pub.hmset(msg.channel, ['a', 'b'], (err, res) => {
    //
    //   if (err) throw err;
    //
    // });


    // pub.sadd(msg.channel, 'RPUSHTEST');

    // pub.rpush(msg.channel, 'RPUSHTEST');

    // pub.get(msg.channel, (err, data) => {
    //
    //   let toWrite = [];
    //
    //   toWrite.push(data);
    //   toWrite.push(jsonData);
    //   console.log('DATA:', toWrite);
    //
    //
    //   pub.set(msg.channel, JSON.parse(toWrite));
    //
    // });
  }


  function socketChannelJoinHandler(data){
    console.log('JOIN:', data.channel);

    subs[socket.id].unsubscribe();
    subs[socket.id].subscribe(data.channel);
  }


  function subsOnMessageHandler(channel, data){
    console.log('GOT SUB MSG:', data);
    socket.emit('channel:post', data);
  }





});




