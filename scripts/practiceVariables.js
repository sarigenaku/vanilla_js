alert("hello! 하이");
console.log("debugging 디버깅 중")


/* var 연습
function abc() {
    var x = 34
}

if (1 == 1) {
    var x = 100
}

var y = 77
abc()

console.log(x)
console.log(y)
*/


/* let 연습
let x = 34
var y = 78

function abc() {
    x = 35
    y = 79
}

if (1 == 1) {
    x = 37
    y = 80
}
console.log(x)
console.log(y)
*/


// const 연습
const a = 89

function abc() {
    const a = 90
}

if (1 == 1) {
    const a = 91
}

abc()
//a = 92
console.log(a)
