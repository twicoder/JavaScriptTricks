// var a = [ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]
// console.log(a);


const total = [0, 1, 2, 3].reduce(function(sum, value) {
    // console.log('*******************');
    // console.log('sum = ', sum);
    // console.log('value = ', value);
    // console.log('*******************');
    return sum + value;
}, 11);
// total is 17
console.log(total);

// ES6 version
const total2 = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);
// total2 is 7
console.log(total2);


var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]

console.log(flattened);

// ES6 version
const flattened2 = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b), []);
// flattened is [0, 1, 2, 3, 4, 5]

console.log(flattened2);



