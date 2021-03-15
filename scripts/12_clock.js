const tokeijaka = document.getElementById("clock");

function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    tokeijaka.innerHTML = `Current time is ${hour}:${minute}:${second}`;
}

tokeijaka.addEventListener("click", getTime);
