let marker, map;

function initMap () {
  //console.log("Inicializando mapa")
  const position= {
    lat: -25.363,
    lng: 131.044
  }

  const map= new google.maps.Map(document.getElementById("map"),{
    zoom: 4,
    center:posicion
  })

  const marker= new google.map.Marker({
    position: posicion,
    map,
    tittle: "posicion inicial"
  })

  //Obtener la geolocalizacion
  //marker.setPosition({lat, lng})
  geoPosiciona()
}

function geoPosiciona() {
  if (navigator.geolocation){
  const geoLoc = navigator.geolocation
  const options= {timeout: 60000}
  const wahtPos= geoLoc.watchPosition(centraMapa, onError, options)
  } else {
    alert("tu navegador no admite geolocalizacion")
  }
}

function centraMapa (position) {
  const nuevaPos= {
    lar:position.coords.latitude,
    lng:position.coords.longitude
  }
  console.log(nuevaPos)
  marker.setPosition({lat, lng})
  map.setCenter(nuevaPos)
}
function onError(error) {
  console.log("se ha producido un error y lo hemos gestionado")
  console.error(error)
}