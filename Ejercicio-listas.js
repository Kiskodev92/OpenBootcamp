const listaCompra =[
{elemento: "patatas"},
{elemento: "macarrones"},
{elemento: "fruta"},
{elemento: "verdura"},
{elemento: "champu"}
]

listaCompra.unshift("Aceite de Girasol")

listaCompra.shift("Aceite de Girasol")

const listapeliculas = [
    {pelicula: "Avengers", director: "Widow", fecha:2007},
    {pelicula: "Batman", director: "Nolan" , fecha:2012},
    {pelicula: "Piratas del caribe", director:"Tim Burton" , fecha: 2002}
    ]

const pelis2010 = ["Arlo", "Superman","Las colinas tienen ojos"]

const val= pelis2010.forEach (v => {
    console.log(v)
    return 4
})

const directores = listapeliculas.map((valor, indice) => `${indice + 1} - ${valor}`)

const titulos = listapeliculas.map((valor, indice) => `${indice + 1} - ${valor}`)

const concat= directores.concat(titulos)

const propagacion= [directores, titulos]