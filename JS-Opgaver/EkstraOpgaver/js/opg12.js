const first = document.querySelector("#foerste")
const all = document.querySelector("#alle")


document.querySelector("#knap").addEventListener("click", function(){
    const ol = document.createElement("ol")
    first.innerHTML = inventar[0]
    inventar.forEach(item => {
        let = document.createElement("li")
        let.innerHTML = item
        ol.appendChild(let)
    });
    all.appendChild(ol)
})
