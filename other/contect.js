let slider = document.querySelector(".slider");
let cercle = document.querySelector(".cercle");
let body = document.querySelector(".body");
let menu = document.querySelector(".menu");


slider.addEventListener("click", () => {
    cercle.classList.toggle("cercleNewCss");
    body.classList.toggle("project-bodyCss");
    menu.classList.toggle("menuNewCss");


})  