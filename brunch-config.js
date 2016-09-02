'use strict';

module.exports = {
  paths: {
    public: './client',
    watched: './dev'
  },
  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  }
};