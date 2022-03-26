"use strict";
function myFilter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(myFilter([1, 2, 3], (item) => item < 3));
