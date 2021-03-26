const COORDS = "coords";
const APPID = "86e6ac817e4b9bf8aa9256ea376b8c70";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, //변수명과 값이 같은 경우에는 이렇게만 써도 됨
        longitude
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
        //localStorage에서 위도, 경도 값을 꺼내와서, api url에 포함시켜 response를 얻어오고, response에서 필요한 항목의 값을 꺼내 콘솔에 찍어보자.
        const cor = JSON.parse(loadedCords);
        const lat = cor["latitude"];
        const lon = cor["longitude"];

        askForWeatherInfo(lat, lon);

    }
}

function askForWeatherInfo(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric`)
        .then(response => response.json())
        .then(data => console.log(`습도는 ${data.main.humidity}도`)); //습도 읽어오기
}

function init() {
    loadCoords();
}

init();