let slider = document.querySelector(".slider");
let cercle = document.querySelector(".cercle");
let body = document.querySelector(".body");
let menu = document.querySelector(".menu");
let menu_btn = document.querySelector(".menu-btn")
let right_arrow = document.querySelector(".right-arrow")


let heading1 = document.querySelector(".h1");
let profile_container = document.querySelector(".profile-container")

slider.addEventListener("click", () => {
    cercle.classList.toggle("cercleNewCss");
    body.classList.toggle("bodyCss");
    menu.classList.toggle("menuNewCss");

    heading1.classList.toggle("h1Color");
    profile_container.classList.toggle("profile-container-NewCss")
})
menu_btn.addEventListener("click",()=>{
    menu.classList.toggle("menu12")
    right_arrow.classList.toggle("right-arrow-rotate")
  })