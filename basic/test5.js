var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();

// Above code equals following:
// var name = 'World!';
// (function () {
//     var name;
//     if (typeof name === 'undefined') {
//         name = 'Jack';
//         console.log('Goodbye ' + name);
//     } else {
//         console.log('Hello ' + name);
//     }
// })();

function test() {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
}

test();

// Hoisting

function printSpecialLine(){
    console.log("*************************");
}

printSpecialLine();

catName("Chloe");

function catName(name) {
    console.log("My cat's name is " + name);
}

catName("Tigger");
/*
The result of the code above is: "My cat's name is Tigger"
*/

printSpecialLine();

num = 6;
num += 7;
var num;
console.log(num);
printSpecialLine();

var x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
var y = 2;


// The following code will behave the same as the previous code:
var x2 = 1; // Initialize x
var y2; // Declare y
console.log(x2 + " " + y2); // '1 undefined'
y2 = 2; // Initialize y

printSpecialLine();