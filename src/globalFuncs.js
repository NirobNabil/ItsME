//some handy functions
//shorthand for queryselector and queryselectorall
//2nd parameter is a boolean and if true returns array of elements from querselectorall
function getElem(selector, array=false){
    if(array){
        return document.querySelectorAll(selector);
    }else{
        return document.querySelector(selector);
    }
}
//returns a CSSStyleDeclaration object of the selector
function getStyles(selector){
    let elem;
    if(typeof selector == 'object'){
        elem = selector;
    }else{ 
        elem = getElem(selector);
    }
    //console.log(elem);
    return window.getComputedStyle(elem);
}

export {
    getElem, getStyles
}