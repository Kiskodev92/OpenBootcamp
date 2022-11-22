const datos= {
    nombre:"Francisco",
    apellido:"García",
    edad:30,
    altura:1.82,
    eresDesarrollador: true,
}

const miedad= datos.edad

console.log(miedad)

const amigos = [
    {Nombre:"Ricardo", anyo:33, alto:1.83},
    {Nombre:"Salva", anyo:28, alto:1.74},
    {Nombre:"Picand", anyo:32, alto:1.92},
]

amigos.sort((a,b)=> a.anyo-b.anyo)
console.log(amigos)