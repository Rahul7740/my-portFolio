let slider = document.querySelector(".slider");
let cercle = document.querySelector(".cercle");
let body = document.querySelector(".body");
let menu = document.querySelector(".menu");
let main_section = document.querySelector(".main-section");
let socialMedia_icons = document.querySelectorAll(".fab");
let menu_btn = document.querySelector(".menu-btn")
let right_arrow = document.querySelector(".right-arrow")

slider.addEventListener("click", () => {
  cercle.classList.toggle("cercleNewCss");
  body.classList.toggle("bodyCss");
  menu.classList.toggle("menuNewCss");
  main_section.classList.toggle("main-section-NewCss");
  
  for (let i of socialMedia_icons) {
    i.classList.toggle("feb-NewCss");
  }
})
menu_btn.addEventListener("click",()=>{
  menu.classList.toggle("menu12")
  right_arrow.classList.toggle("right-arrow-rotate")
})


let abcd = document.querySelectorAll(".abc");

for (let i of abcd) {
  let a = Array.from(i.innerHTML);
  console.log(a);

  i.innerHTML = "";
  a.forEach((element) => {
    i.innerHTML += `<span class="animation">${element}</span>`;
  });
  let pump = document.querySelectorAll(".animation");

  pump.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.add("pump");
    });
    element.addEventListener("mouseout", () => {
      setTimeout(() => {
        element.classList.remove("pump");
      }, 600);
    });
  });
}