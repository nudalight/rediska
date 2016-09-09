'use strict';

const toArray = require('./toArray.func.js');


function benchmark(){

  if (arguments.length < 2) return;

  let 
    funcs = Array.prototype.slice.call(arguments),
    data = funcs.shift(),
    timings = {}
  ;
  

  funcs.forEach((func, i, list) => {

    if (typeof v == 'function'){

      let ts1 = +new Date;
      func(data);
      let ts2 = +new Date;

      timings[func.name || 'noname-' + i] = ts2 - ts1;

    } else {
      timings['not-a-function-type'] = null;
    }


    
  });


  // toDO make console.log('the best performance:', func.name]

  return timings;
}


benchmark('a', 'b', 'c', 'd');
