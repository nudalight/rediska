'use strict';

const
  redis = require('redis'),
  redisPort = 6379,
  redisHost = '127.0.0.1',
  redisClient = redis.createClient(redisPort, redisHost)
;


redisClient.on('error', err => {
  console.log('EV: redis Error:', err);
});



redisClient.on('connect', () => {
  console.log('EV:', 'stream is connected to the server');
});

redisClient.on('ready', () => {
  console.log('EV:', 'connection is established');
  console.log(redisClient.server_info);
});

redisClient.on('connect', () => {
  console.log('EV:', 'stream is connected to server');
});

redisClient.on('end', () => {
  console.log('connection has closed');
});


// redisClient.set('myKey2', 'myValue2', function callback(err, reply){
//   if (err) return err;
//   console.log('data wrote:', reply);
// });
//
// redisClient.get('myKey', function callback(err, reply){
//
//   if (err) return err;
//   console.log('got data:', reply);
//
// });


// redisDb.hmset('frameworks', {
//   'javascript': 'AngularJS',
//   'css': 'Bootstrap',
//   'node': 'Express'
// }, function callback(err, reply){
//
//   if (err) return err;
//   console.log('wrote object:', reply);
//
// });
//
//
// redisDb.lpush(['frameworks', 'Val2', 'Val3', 'Val4'], function callback(err, reply){
//
//   if (err) return err;
//   console.log('DONE LPUSH', reply);
//
//   redisDb.lrange('frameworks', 0, -1, function callback(err, reply){
//
//     if (err) return err;
//     console.log('RETRIEVED NEW KEY:', reply);
//
//   });
//
// });





//
// redisDb.sadd(
//   ['tags', 'angular', 'backbone', 'emberjs'],
//   function(err, reply){
//     console.log('DONE');
//   }
// );
//
//
//
// redisDb.smembers('tags', (err, reply) => {
//
//   if (err) return err;
//   console.log('SET OF TAGS:', reply);
//
// });
//
//
// redisDb.exists('key', (err, reply) => {
//
//   if (reply == 1){
//     console.log(reply, 'exists');
//   } else {
//     console.log(reply, 'does not exists')
//   }
//
// });





//
// redisDb.set('key60', 60, () => {
//   redisDb.expire('key60', 30);
// });



// redisClient.exists('key60', (err, reply) => {
//   console.log('key60 EXISTANCE:', reply);
// });

// redisDb.set("string key", "string val", redis.print);




/*


NEW ATTEMPT


 */

let D = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten'
];

// D[0], D[1], D[2], D[3], D[4]],



redisClient.set('justString', 'valueValue');


// redisClient.hmset('hash-set', 'valValVal', (err) => {
//   if (err) throw err;
// });



redisClient.get('justString', (err, result) => {

  if (err) throw err;
  console.log('string GOT:', result);

});

// redisClient.hkeys('hash-set', (err, result) => {
//
//   console.log('HASH:', result);
//
// });


// redisClient.quit();

