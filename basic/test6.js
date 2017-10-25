var END = Math.pow(2, 53);
var START = END - 100;
console.log(START);
console.log(END);
var count = 0;
for (var i = START; i <= END; i++) {
    console.log(i);
    break;
    count++;
}
console.log(count); // 101

// 在 JS 里, Math.pow(2, 53) == 9007199254740992 是可以表示的最大值. 最大值加一还是最大值. 所以循环不会停.

