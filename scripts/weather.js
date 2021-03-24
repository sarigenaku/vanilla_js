const COORDS = "coords";

function handleGeoSuccess(position) {
    console.log(position);
}

function handleGeoError() {
    console.log("위치 값을 읽어오지 못했어욤");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
 
    if (loadedCords === null) {
        askForCoords();
    } else {
        //getWeather
    }
}

function init() {
    loadCoords();
}

init();