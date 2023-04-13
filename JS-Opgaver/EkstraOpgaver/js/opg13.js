const first = document.querySelector("#foerste")
const all = document.querySelector("#alle")



document.querySelector("#knap").addEventListener("click", function(){
    first.innerHTML = `Titel: ${ekkoShortlist[0].titel} Instruktor: ${ekkoShortlist[0].instruktor} Shortlist: ${ekkoShortlist[0].shortlist}`
    

    const ol = document.createElement("ol")
    for (const key in ekkoShortlist) {
        let li = document.createElement("li")
        li.innerHTML = `Titel: ${ekkoShortlist[key].titel} Instruktor: ${ekkoShortlist[key].instruktor} Shortlist: ${ekkoShortlist[key].shortlist}`
        ol.appendChild(li)
      }
    all.appendChild(ol)
})
