const first = document.querySelector("#foerste")
const all = document.querySelector("#alle")

document.querySelector("#knap").addEventListener("click", function(){
    const ol = document.createElement("ol")
    first.innerHTML = inventar[0]
    inventar.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = item
        ol.appendChild(li)
    });
    all.appendChild(ol)
})
