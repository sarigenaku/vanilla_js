//CSS, JS, HTML 파일이 분리되어 쓰이도록 함 e.g. JS는 로직용이지, 웹사이트의 스타일용이 아니다
const eva = document.getElementById("eva");

const CLICKED_CLASS = "clicked";


function handleClick() {
    const hasClass = eva.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        eva.classList.remove(CLICKED_CLASS);
    } else {
        eva.classList.add(CLICKED_CLASS);
    }
}

function init() {
    eva.addEventListener("click", handleClick);
}

init();