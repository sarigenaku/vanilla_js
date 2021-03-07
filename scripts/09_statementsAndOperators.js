const age = prompt("How old are you?", "Pleae input your real age")

if (age == 34) {
    console.log("Hi me")
} else if (age > 30) {
    console.log("Consider your health")
} else if (age > 18) {
    console.log("You can drink")
} else if (age == 18) {
    console.log("Just wait for one year")
} else if (age == 2 && "2" === 2) { //==는 동등, ===는 일치  //동등 연산자(==)와 일치 연산자(===) 간의 가장 두드러지는 차이점은 일치 연산자는 타입변환을 시도하지 않는다는 것입니다. 일치 연산자는 다른 타입을 가진 피연산자는 다르다고 판단합니다.
    console.log("You are two-year-old")
} else if (age == 1 && "1" == 1) {
    console.log("Call the police!")
} else {
    console.log("Do not drink! Go milk!")
}