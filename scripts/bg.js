const img = document.createElement("img");
const body = document.querySelector("body");
const imgNum = Math.floor(Math.random() * 3) +1;

img.src = `images/${imgNum}.png`
img.classList.add("bgImage");
body.appendChild(img);


