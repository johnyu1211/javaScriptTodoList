const API_KEY = "cfc9aa2a1304dc9aa7240f12bfff5e8f"

function onGeoOk(positions){

    const lat = positions.coords.latitude;
    const lon = positions.coords.longitude;
    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

}
function onGeoError(){
    alert("Can't find your location")
}

navigator.geolocation.getCurrentPosition()