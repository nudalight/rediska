'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory, Redirect } from 'react-router';

import ChatList from './components/chat-list/ChatList';
import Chat from './components/chat/Chat';
import Intro from './components/intro/Intro';
import CreateChat from './components/create-chat/CreateChat';
import Page404 from './components/not-found/NotFound';





ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/intro" component={ Intro } />
    <Route path="/create" component={ CreateChat } />
    <Route path="/list" component={ ChatList } />
    <Route path="/chat/:id" component={ Chat } />
    <Redirect from="/" to="/intro" />
  </Router>,
  document.getElementsByClassName('rediska-app-container')[0]
);

