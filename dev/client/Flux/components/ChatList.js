'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class List extends Component {

  render(){
    return(
      <div className="chat-list">
        <Link to="/chat/1">Chat</Link>
        <Link to="/create-chat">CreateChat</Link>
      </div>
    );
  }

}


/*

JUST AN EXAMPLE



 const React = require('react')
 const {State} = require('react-router')

 const BooksStore = require('./books-store')

 module.exports = React.createClass({

 displayName: 'BooksShow',

 mixins: [ State ],

 getInitialState() {
 return this.getStateFromStores()
 },

 getStateFromStores() {
 return {
 book: BooksStore.find({ id: this.getParams().id })
 }
 },

 componentDidMount() {
 BooksStore.addChangeListener(this._onChange)
 },

 componentWillUnmount() {
 BooksStore.removeChangeListener(this._onChange)
 },

 _onChange: function() {
 this.setState(this.getStateFromStores())
 },

 render() {
 return (
 <ul>
 <li>{this.state.book.title}</li>
 <li>{this.state.book.author}</li>
 <li>{this.state.book.description}</li>
 </ul>
 )
 }

 })


 */


