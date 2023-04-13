// Løs opgave 2 ved at udfylde denne js-fil med variabler, event-listners og functions
const p = document.querySelector("p")

function changeStyle(){
    p.style.fontStyle = "italic"
}

document.querySelector("#knap").addEventListener("click", changeStyle, false)