const LOCATION = "location";

function success(position) {
    console.log(position);
}

function error() {
    console.log("위치 값을 읽어오지 못했어욤");
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error)
}

function loadLocation() {
    const locationLs = localStorage.getItem(LOCATION);
 
    if (locationLs === null) {
        getLocation();
    } else {
        //코드 추가 예정
    }
}

function init() {
    loadLocation();
}

init();