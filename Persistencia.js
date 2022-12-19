var nombre= "Francisco";
var apellido= "Garcia";

const persona= {
    nombre: "Francisco",
    edad: 30
}

sessionStorage.getItem("persona", JSON.stringify({nombre:"Francisco", edad:30}))
console.log(JSON.parse(sessionStorage.getItem("persona")))

document.cookie= "NombreCookie"

document.cookie= "nombreCaducidad=nombre; expires" + new Date(2023, 0, 1).toUTCString()