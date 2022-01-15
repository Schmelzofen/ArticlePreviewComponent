let button = document.getElementById("checkbox1")
let firstContainer = document.getElementById("firstContainer")
let secondContainer = document.getElementById("secondContainer")
let desktopContainer = document.getElementById("socialMedia")
button.addEventListener("click", function () {
    secondContainer.classList.toggle("hide")
    firstContainer.classList.toggle("show")
    desktopContainer.classList.toggle("hide")
})