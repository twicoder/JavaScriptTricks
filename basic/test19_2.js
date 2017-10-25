function sidEffecting(ary) {
    ary[0] = ary[2];
}
function bar(a,b,c=3) {
    console.log('before:',arguments);
    c = 10;
    console.log('after:',arguments);
    sidEffecting(arguments);
    console.log('final:',arguments);
    return a + b + c;
}
console.log(bar(1,1,1));

