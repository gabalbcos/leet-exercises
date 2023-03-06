//1108. Defanging an IP Address 05-03-2023

var defangIPaddr = function(address) {   
    const reg = /\./g
    const newStr = address.replace(reg, "[.]");
    return newStr;
};

//1539. Kth Missing Positive Number
var findKthPositive = function(arr, k) {
    let finalArray = [];
    let i = 1;
    while (finalArray.length +1 <= k){
        if (arr.indexOf(i) === -1){
            finalArray.push(i);
            }
            i++
        }
    console.log(finalArray);
    return finalArray[k-1];
};