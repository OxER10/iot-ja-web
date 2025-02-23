// Create array
var array = [1, 2, 3, 4];
console.log(array);
// Push number to the array
array.push(5);
console.log(array);
// Unshift number to the array
array.unshift(0);
console.log(array);
// Splice element 2
array.splice(2, 1);
console.log(array);
// Log number on element 3
console.log(array.indexOf(3));
console.log(array);
// Join array to string
let str = array.join(", ");
console.log(str);
// Slice values to subarray and for each loop the values
var subarray = array.slice(1, 3);
subarray.forEach(element => {
    console.log(element);
});

/*
Log:
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4, 5 ]
[ 0, 1, 2, 3, 4, 5 ]
[ 0, 1, 3, 4, 5 ]
2
[ 0, 1, 3, 4, 5 ]
0, 1, 3, 4, 5
1
3
*/