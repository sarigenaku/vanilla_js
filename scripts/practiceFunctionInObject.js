const cal = {
    plus: function plus(a, b) {
        return a+b
    },
    minus: function minus(a, b) {
        return a-b
    },
    multiply: function multiply(a, b) {
        return a*b
    },
    devide: function devide(a, b) {
        return a/b
    },
}

console.log("합은", cal.plus(1,7))
console.log("차는", cal.minus(1,7))
console.log('곱은', cal.multiply(2,9))
console.log(`나누면 ${cal.devide(34,17)}`) //String을 ""나 ''로 일일이 감싸는 것보다는 `text ${Object}`가 훨씬 더 간편  //템플릿 리터럴은 이중 따옴표 나 작은 따옴표 대신 백틱(` `) (grave accent) 을 이용합니다.  템플릿 리터럴은 또한 플레이스 홀더를 이용하여 표현식을 넣을 수 있는데, 이는 $와 중괄호( $ {expression} ) 로 표기할 수 있습니다.