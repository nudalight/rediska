'use strict';


var LIB = function(){

  this.toBin = function(dec){
    return parseInt(dec, '10').toString(2);
  };

  

};



window._l = new LIB;
