const tabs = document.querySelectorAll("li")
const content = document.querySelectorAll(".content > div")

window.addEventListener("load", function () {
  // If cookie is undefined adds new cookie with value of 0
  if (!this.document.cookie.length) {
    this.document.cookie = 0
  }

  tabChange(this.document.cookie)
})

tabs.forEach((item, index) => {
  item.addEventListener("click", function (event) {
    document.cookie = index
    tabChange(index)
  })
})

function tabChange(index) {
  // Deactivate show / activate on previous tab and connected content
  document.querySelector(".active").classList.toggle("active")
  document.querySelector(".show").classList.toggle("show")

  // Activate show / active on clicked tab and connected content
  content[index].classList.toggle("show")
  tabs[index].classList.toggle("active")
}
