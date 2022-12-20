const parrafos= document.querySelectorAll(".parrafo")

const secciones= document.querySelector(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", Event => {
        console.log("estoy arrastrando el párrafo" + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma= document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", ()=> {
        //console.log("Ya he terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener ("dragover", event=>{
        event.preventDefault()
        event.dataTransfer.dropEffect="move"
        //console.log("drag over")
        //
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo=event.dataTransfer.getData("id")
        //console.log("párrafo id: ", id_parrafo)
        const parrafo= document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})