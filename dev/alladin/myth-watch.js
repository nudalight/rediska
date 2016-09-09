'use strict';

const fs = require('fs');
const chokidar = require('chokidar');
const myth = require('myth');


let
  log = console.log.bind(console),
  cssIndex = './dev/client/styles/index.css'
;


let watcher = chokidar.watch(
  './dev/client/styles/**/*.css',
  {
    persistent: true
  }
);


watcher
  .on('all', (event, path, stats) => {
    if (event != 'add') log(`File changed: ${ path }`);
  })
  .on('change', runMythify)
  .on('unlink', runMythify)
  .on('addDir', runMythify)
  .on('unlinkDir', runMythify)
;

function runMythify(path, stats){
  mythify(cssIndex);
}


function mythify(input, output){

  if (!input) throw new Error('input parameter must be specified');
  output = output || './style.css';

  let
    read,
    converted
  ;

  read = fs.readFileSync(input, 'utf-8');
  converted = myth(read, { source: input});
  fs.writeFileSync(output, converted);

  return true;
}
