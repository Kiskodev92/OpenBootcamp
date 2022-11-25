function verdad (true) {
 console.log(true)
}
true()

const Promesa = new Promise((resolve, reject) => {
    const i= Math.floor(Math.random()*2)
    if (i !==0) {
        resolve()
    } else {
        reject()
    }
})
Promesa
.SetTimeout(() => console.log("Hola soy una promesa"))

function* generaId() {
    let id=0;
    while(true) {
        id++
        if (id === 10) {
            return
        }
        yield id 
    }
}