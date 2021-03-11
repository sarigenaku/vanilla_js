# Index
「바닐라 JS로 크롬 앱 만들기」 #2.6강까지의 학습 내용

## Web API
* Window
    * alert()
    * prompt()
* Console.log()
* Document
    * getElementById()
    * querySelector()
* Element
    * style.color()
    * addEventListener()

## JS 기본 문법
* var, let, const
* data types
* data in array or object
* function
    * with parameter
    * in object
* if/elseif/else
* =, ==, ===, &&, ||
* this


# Q&A

## Q) JavaScript의 브라우저 환경 vs. Node.js 환경
모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있다. 브라우저뿐만 아니라 Node.js도 자바스크립트 엔진을 내장하고 있다. 따라서 자바스크립트는 브라우저와 Node.js 환경에서 실행할 수 있다. 기본적으로 브라우저에서 동작하는 코드는 Node.js 환경에서도 동작한다.
그런데 브라우저와 Node.js는 존재 목적이 다르다. 브라우저는 HTML, CSS, 자바스크립트를 실행하여 웹 페이지를 화면에 렌더링하는 것이 주된 목적이지만, Node.js는 서버 개발 환경을 제공하는 것이 주된 목적이다. 따라서 브라우저와 Node.js 모두 자바스크립트의 코어인 ECMAScript를 실행할 수 있지만 브라우저와 Node.js에서 ECMAScript 이외에 추가적으로 제공하는 기능은 호환되지 않는다.
예를 들어 브라우저는 HTML 요소를 선택하거나 조작하는 기능들의 집합인 DOM API를 기본적으로 제공한다. 하지만 서버 개발 환경을 제공하는 것이 주 목적인 Node.js는 클라이언트 사이드 Web API인 DOM API를 제공하지 않는다. 서버에서는 HTML 요소를 다룰 일이 없기 때문이다. 반대로 Node.js에서는 파일을 생성하고 수정할 수 있는 File 시스템을 기본 제공하지만 브라우저는 이를 지원하지 않는다. (Web API인 File API FileReader 객체를 사용해 사용자가 지정한 파일을 읽어 들이는 것은 가능하다.) 브라우저는 사용자 컴퓨터에서 동작한다. 만약 브라우저를 통해 사용자 컴퓨터에 파일을 생성하거나 기존 로컬 파일을 수정할 수 있다면 사용자 컴퓨터는 악성 코드에 노출되기 쉽기 때문에 보안 상 이유로 이를 금지하고 있다.
https://poiemaweb.com/js-hello-world


## Q) JS 프로젝트 시 가상환경 필요?
이어서 게시판, 실시간 채팅, 위키 시스템, 개인 SNS 등의 웹 애플리케이션을 만들어 보면서 Node.js와 리액트를 제대로 활용하는 방법을 살펴봅니다. 더불어 최근 개발 환경을 구축할 때 가상 환경을 사용하는 경우가 많아짐에 따라 이 책에서는 가상 머신을 준비하고, 가상 머신 위에서 프로그램을 동작시키는 방법도 소개합니다.
https://wikibook.co.kr/nodejs-react/
-> "Node.js, React 말고 그냥 JS의 경우에는 가상환경 딱히 필요 없음"


## Q) JS란?
동적인 웹문서는 무엇일까요? 쉽게 말하면 페이지 로딩없이 즉시 웹문서에서 반응을 하는것 입니다.
쉽게 접해볼수 있는 예는 구글검색창에 검색어를 입력하면 연관검색어가 하단에 나오는것 입니다.
즉 동적인 웹문서를 만들수 있게 도와주는 언어가 바로 자바 스크립트입니다.
https://bvc12.tistory.com/254


## Q) js scirpt문의 Document.querySelector()란?
Document.querySelector()는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 null을 반환합니다.
https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector