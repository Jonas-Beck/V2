const repeat = 5 // Times to repeat
const answer = document.querySelector("#svar")

document.querySelector("#knap").addEventListener("click",function(){
    for (let i = 0; i < repeat; i++) {
        answer.innerHTML += "øller "
    }
})