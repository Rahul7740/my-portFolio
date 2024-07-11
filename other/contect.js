let slider = document.querySelector(".slider");
let cercle = document.querySelector(".cercle");
let body = document.querySelector(".body");
let menu = document.querySelector(".menu");
let menu_btn = document.querySelector(".menu-btn")
let right_arrow = document.querySelector(".right-arrow")


// slider.addEventListener("click", () => {
//     cercle.classList.toggle("cercleNewCss");
//     body.classList.toggle("project-bodyCss");
//     menu.classList.toggle("menuNewCss");
// })  


menu_btn.addEventListener("click",()=>{
    menu.classList.toggle("menu12")
    right_arrow.classList.toggle("right-arrow-rotate")
  })