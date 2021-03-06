//getElementByID() -> 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환합니다. 
const el = document.getElementById("text") 
el.style.color = "white"

//querySelector() -> ID가 없는 요소에 접근하려면 Document.querySelector()를 사용하세요. 모든 선택자를 사용할 수 있습니다. // 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 null을 반환합니다.
const el2 = document.querySelector(".text3")
console.log(el2) //console.dir(el2) 찍어보면, 해당 element에서 어떤 property를 쓸 수 있을지 파악할 수 있다. //주어진 JavaScript 객체의 속성 목록을 상호작용 가능한 형태로 표시합니다. 속성 값이 다른 객체라면 펼쳐서 살펴볼 수 있습니다.
el2.style.color = "green"