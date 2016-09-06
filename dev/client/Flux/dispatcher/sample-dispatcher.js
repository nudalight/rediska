'use strict';

const Dispatcher = require('flux').Dispatcher;
const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = (action) => {

  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });

};


module.exports = AppDispatcher;
