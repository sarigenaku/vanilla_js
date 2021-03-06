const el3 = document.querySelector(".text4")

function changeColor() {
    el3.style.color = "yellow"
}

el3.addEventListener("click", changeColor) //changeColor()라고 쓰면 페이지 열자마자 클릭도 안 했는데 곧바로 실행되어 버린다.  //The () you've got in the second one means to call the function before passing the result to setInterval.
