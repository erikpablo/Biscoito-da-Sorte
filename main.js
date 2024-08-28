const cookieClosed = document.querySelector(".cookieClosed")
const openCookie = document.querySelector(".openCookie")
const clickImg = document.querySelector(".imgTremble")
const btnOpenNewCookie = document.querySelector("button")

function clickCokie() {
    cookieClosed.classList.toggle('hide')
    openCookie.classList.toggle('hide')
}

clickImg.addEventListener('click', clickCokie)
btnOpenNewCookie.addEventListener('click', clickCokie)