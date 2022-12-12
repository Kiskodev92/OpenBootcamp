class Estudiante {
    var nombre;
    var asignaturas ={Javascript, HTML, CSS};
        obtenDatos (){
            return new Estudiante();
        }
} 
let estudiante= new Estudiante();
console.log(estudiante.obtenDatos());