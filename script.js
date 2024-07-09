let slider = document.querySelector(".slider");
let cercle = document.querySelector(".cercle");
let body = document.querySelector(".body");
let menu = document.querySelector(".menu");
let main_section = document.querySelector(".main-section");
let socialMedia_icons = document.querySelectorAll(".fab");

slider.addEventListener("click", () => {
  cercle.classList.toggle("cercleNewCss");
  body.classList.toggle("bodyCss");
  menu.classList.toggle("menuNewCss");
  main_section.classList.toggle("main-section-NewCss");
  
  for (let i of socialMedia_icons) {
    i.classList.toggle("feb-NewCss");
  }
})
