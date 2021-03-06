const lunch = "Tockpoki"
const human = true //TRUE (X)
const age = 34
const footsize = 0.50

try {
    footsize = 2.5
} catch(error) {
    console.log("const 변수에는 새 값을 할당할 수 없엉")
} finally {
    console.log("var나 let 변수를 쓰면 새 값 할당이 가능해")

}
console.log(lunch)
console.log(human)
console.log(age)
console.log(footsize)

console.log(typeof footsize) //typeof 연산자는 Float를 판명 못하나? Number로 나오네
