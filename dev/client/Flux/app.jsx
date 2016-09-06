'use strict';

import React, { Component } from 'react';

import RediskaApp from './components/RediskaApp';
import ChatList from './components/ChatList';
import Chat from './components/Chat';
import Intro from './components/Intro';





let routes = (
  <Router>
    <Route name="intro" path="/intro" handler={ Intro } />
    <Route name="create" path="/create" handler={ CreateChat } />
    <Route name="list" path="/list" handler={ ChatList } />
    <Route name="chat" path="/chat/:id" handler={ Chat } />
    <DefaultRoute handler={  } />
    <Redirect from="/" to="intro" />
    <NotFoundRoute handler={ NotFound } />
  </Router>
);


Router.run(routes, (Hander, state) => {
  React.render(<Handler />, document.body);
  // someAction.transition(state.params);
});




React.render(
  <RediskaApp />,
  document.body
);






module.exports = RediskaApp;
