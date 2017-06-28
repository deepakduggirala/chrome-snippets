function paramNames(f){
    str = f.toString();
    var ar = str.match(/function[^(]*\(([^)]*)\)/)[1];
    return ar.split(/\W+/);
}

cLog = console.log.bind(null, 'custom message');

function cLog(){
    
}