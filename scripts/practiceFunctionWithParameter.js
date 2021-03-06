function healthCheck (name, date) { //function은 '생성자'
    console.log(name, "이란 이름으로", date, "에 가겠습니다") //console.log의 파라미터는 몇 개까지 허용되며, 어떻게 한 문장으로 조합되는가? -> 각각의 자바스크립트 객체들의 문자열 표현은 순서가 있는 목록에 추가되며, 출력됩니다. 
    const reservation = true
}

healthCheck("Park", "3/10")
//console.log(healthCheck("Ra", "3/12").reservation) //함수 안의 변수를 꺼내 쓰려면? -> 함수 내부에서 선언된 변수명과 변수값은 함수 외부에서는 사용할 수 없습니다. 
