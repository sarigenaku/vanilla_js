const COORDS = "coords";

function saveCoords(obj) {
    localStorage.setItem(COORDS, JSON.stringify(obj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude: latitude,
        longitude: longitude,
    }

    saveCoords(coordsObj);
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