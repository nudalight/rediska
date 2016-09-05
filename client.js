console.log(1);

var socket = io();

Zepto(function($){

  joinToChannel();

});





function postToChannel(){

  var msg = $('.msgBox').val();
  var nickname = $('[name="username"]').val();
  var channel = $('[name="channel"]:checked').val();

  if (!msg || !nickname || !channel) return;

  console.log('post to channel:', msg);

  socket.emit('channel:post', {
    nickname: nickname,
    channel: channel,
    message: msg
  });

}


function joinToChannel(){
  $('[name="channel"]').change(function(){
    console.log(this.value);

    var nickname = $('[name="username"]').val();
    var channel = this.value;

    if (!nickname || !channel) return;

    console.log('you have joined to channel:', channel);

    getChannelPosts(channel);

    socket.emit('channel:join', {
      nickname: nickname,
      channel: channel
    });

    socket.on('channel:post', function(data){
      console.log('channel:post -> RETURN:', data);
      $('.message-history').append('<p>' + data + '</p>');
    });

    socket.on('channel:posts', renderPosts);


  });
}


function getChannelPosts(channel){
  socket.emit('channel:posts', {
    channel: channel
  });
}

function renderPosts(posts){

  $('.message-history').html('');

  console.log('CHANNEL POSTS:', posts);

  posts.forEach(function(v, i, list){
    $('.message-history').append('<p>' + v + '</p>');
  });

}