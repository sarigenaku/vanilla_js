const clockContainer = document.querySelector(".js-clock"), clockTitle = clockContainer.querySelector("h1"); //Returns the first element that is a descendant of node that matches selectors. -> class의 속성값, element(div) 안의 element(h1) 등.

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = ( hours < 10 ? `0${hours}` : hours ) + ":" + ( minutes < 10 ? `0${minutes}` : minutes ) + ":" + ( seconds < 10 ? `0${seconds}` : seconds )
}

function init() {
    getTime();
}

setInterval(init, 1000) //milliseconds: 1/1000 = 1초  //init() (X)