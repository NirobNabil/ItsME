"use strict";

var fs = require('fs');

fs.open('./fonts.js', 'r+', function (err, fd) {});
var importString = "";
var fontfaceString = "";

function returnDir(dir) {
  var files = fs.readdirSync(dir, {
    withFileTypes: true
  });
  files.forEach(function (file) {
    if (file.isFile()) {
      if (file.name.split('.')[1] == 'otf' || file.name.split('.')[1] == 'ttf') {
        var importName = file.name.replace(/(%20|_|-| |\..*)/gm, '').toLowerCase().trim(); //importString = importString + ( "import " + importName + ' from "' + dir + file.name + '"; \n')

        importString = "".concat(importString, " import ").concat(importName, " from \"").concat(dir + file.name, "\"; \n"); //fontfaceString = fontfaceString + "@font-face{ font-family: " + importName + "; " + "src: url( {" +  importName + "});" + "} \n";

        fontfaceString = "".concat(fontfaceString, " @font-face{ font-family: ").concat(importName, ";  src: url( ${ ").concat(importName, " });} \n");
      }
    }

    if (file.isDirectory()) {
      returnDir(dir + file.name + '/');
    }
  });
}

var fontsdir = './assets/fonts/';
returnDir(fontsdir);
var toWrite = "\n    import { createGlobalStyle } from 'styled-components';\n    ".concat(importString, "\n\n    let globalFonts = createGlobalStyle`\n    ").concat(fontfaceString, "\n    `\n\n");
fs.writeFile('fonts.txt', toWrite, function () {
  fs.rename('./fonts.txt', './fonts.js', function (err) {
    if (err) throw err;
  });
}); // fs.writeFile('fonts.txt', importString + fontfaceString,  function(err){
//     if(err){ throw err }
// })