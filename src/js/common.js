/* eslint-disable no-console */

function isEmpty(value) {
    if(typeof value == 'undefined' || value == null || value.length <= 0) return true;
    else return false;
}

function numCurrency(value) {
    if(this.isEmpty(value)) return '';
    
    var len, point, str, num; 
    num = String(value);
    point = num.length % 3 ;
    len = num.length; 
   
    str = num.substring(0, point); 
    while (point < len) { 
        if (str != "") str += ","; 
        str += num.substring(point, point + 3); 
        point += 3; 
    } 

    return str;
    //.replace(/\B(?=(\d{3})+(?!\d))/g, ","); -> 정규식이 안써지는건지 뭘까
}

export {
    isEmpty, 
    numCurrency
}