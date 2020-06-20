var fs = require('fs')

fs.open('./fonts.js', 'r+', function(err, fd){
    
})

var importString = "";
var fontfaceString = "";

function returnDir(dir){
    let files = fs.readdirSync(dir, { withFileTypes: true })
        
    files.forEach(function(file){
        if(file.isFile()){ 
            if(file.name.split('.')[1] == 'otf' || file.name.split('.')[1] == 'ttf'){
                let importName = file.name.replace(/(%20|_|-| |\..*)/gm, '').toLowerCase().trim();
                //importString = importString + ( "import " + importName + ' from "' + dir + file.name + '"; \n')
                importString = `${importString} import ${ importName } from "${ dir + file.name }"; \n`
                //fontfaceString = fontfaceString + "@font-face{ font-family: " + importName + "; " + "src: url( {" +  importName + "});" + "} \n";
                fontfaceString = `${fontfaceString} @font-face{ font-family: ${importName};  src: url( \${ ${importName} });} \n`;
            }
        }
        if(file.isDirectory()){ 
            returnDir(dir + file.name + '/')
        }
    })
}

const fontsdir = './assets/fonts/';
returnDir(fontsdir);
let toWrite = `
    import { createGlobalStyle } from 'styled-components';
    ${ importString }

    let globalFonts = createGlobalStyle\`
    ${ fontfaceString }
    \`

`
fs.writeFile('fonts.txt', toWrite, function(){
    fs.rename('./fonts.txt', './fonts.js', function(err){ if(err) throw err });
})


// fs.writeFile('fonts.txt', importString + fontfaceString,  function(err){
//     if(err){ throw err }
// })



