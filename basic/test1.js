var myParseInt = function (x, radix,arr) {
    console.log("****************");
    console.log(x);
    console.log(radix);
    console.log(arr);
    console.log("****************");
    return parseInt(x, radix,arr);
};

var a = ["1", "2", "3"].map(myParseInt);
console.log(a);
// The real call is:
parseInt("1",0,["1","2","3"]);  // Output is 1
parseInt("2",1,["1","2","3"]);  // Output is NaN
parseInt("3",2,["1","2","3"]);  // Output is NaN


// The output is:

// ****************
// 1
// 0
//     [ '1', '2', '3' ]
// ****************
// ****************
// 2
// 1
//     [ '1', '2', '3' ]
// ****************
// ****************
// 3
// 2
//     [ '1', '2', '3' ]
// ****************
// [ 1, NaN, NaN ]
