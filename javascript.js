//1108. Defanging an IP Address 05-03-2023

var defangIPaddr = function(address) {   
    const reg = /\./g
    const newStr = address.replace(reg, "[.]");
    return newStr;
};