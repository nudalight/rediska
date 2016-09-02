'use strict';

const redis = require('redis');

let sub = redis.createClient();
let pub = redis.createClient();

sub.on('subscribe', (channel, count) => {

  pub.publish('a nice channel', 'I am sending a msg');
  pub.publish('a nice channgel', 'Second message');
  pub.publish('a nice channel', 'Third msg');


});