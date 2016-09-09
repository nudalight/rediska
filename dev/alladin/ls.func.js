'use strict';

/*
  Задача:
  1. Получить список файлов и папок по определенному пути с сохранением структуры
  2.1. Вернуть результат в виде объекта
  3.1. Вернуть массив с путями файлов, попавших под определенный шаблон
*/


const fs = require('fs');
const path = require('path');



function getInternals(inspectDir, filePattern, callback){



}


let iter = 0;



function getInternalsSync(inspectDir, filePattern){

  let internals = {};

  internals[inspectDir] = fs.readdirSync(pathToRead);



  var x = getContents(inspectDir);

  function getContents(pathToRead){
    let result = fs.readdirSync(pathToRead);


    result.forEach(function(v, i, list){
      let pathTo = path.normalize(pathToRead + '/' + v);
      let isDir = fs.lstatSync(pathTo).isDirectory();

      if (isDir && iter < 15){
        console.log('PARSE:', pathTo);
        iter++;
        getContents(pathTo);
      }

    });

    console.log('result:', result);
    return result;
  }

  console.log('G-RESULT:', x);



  function inThereDir(objKeys){

  }


}





// function getInternalsSync(inspectDir, filePattern){
//
//   let internals = {};
//
//   internals[inspectDir] = {};
//
//   var x = getContents(inspectDir);
//
//   function getContents(pathToRead){
//     let result = fs.readdirSync(pathToRead);
//
//
//     result.forEach(function(v, i, list){
//       let pathTo = path.normalize(pathToRead + '/' + v);
//       let isDir = fs.lstatSync(pathTo).isDirectory();
//
//       if (isDir && iter < 15){
//         console.log('PARSE:', pathTo);
//         iter++;
//         getContents(pathTo);
//       }
//
//     });
//
//     console.log('result:', result);
//     return result;
//   }
//
//   console.log('G-RESULT:', x);
//
//
//
// }










exports.getInternals = getInternals;
exports.getInternalsSync = getInternalsSync;



getInternalsSync('./dev/server');


var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
    files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      filelist.push(file);
    }
  });
  console.log( filelist);
  return filelist;
};


// walkSync('./dev/server');
