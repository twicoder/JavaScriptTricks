var ary = [0, 1, 2];
ary[10] = 10;
ary.filter(function (x) {
    console.log(x);
    return x === undefined;
});

var myNumbers = Array.apply(null, Array(3)).map(Function.prototype.call.bind(Number));
console.log(myNumbers);

// The above code equals following logic:

var myNumber2 = Array.apply(null, Array(3)).map(
    function (x, i) {
        return Number.call(x, i);
    }
);

console.log(myNumber2);

var myNumber3 = Array.apply(null, Array(3)).map(Function.prototype.call,Number);

console.log(myNumber3);


var a = ["aaa  ", "  bbb", "  ccc  "];

a.map(function(x) { return x.trim(); });               // ['aaa', 'bbb', 'ccc']
a.map(Function.prototype.call, String.prototype.trim); // ['aaa', 'bbb', 'ccc']
