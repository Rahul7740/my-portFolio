let slider = document.querySelector(".slider");
let cercle = document.querySelector(".cercle");
let body = document.querySelector(".body");
let menu = document.querySelector(".menu");

let green = document.querySelectorAll(".color-green");
let projects = document.querySelectorAll(".projects");

let projects_container = document.querySelector(".projects-container");
let proj = [
  {
    name: "meditation-center",
    link: "https://rahul7740.github.io/Meditation-center/",
    img: "./images/Yoga Zone.jpg",
  },
  {
    name: "Login-page",
    link: "https://rahul7740.github.io/login-page/",
    img: "./images/login.JPG",
  },
  {
    name: "Verlin",
    link: "https://rahul7740.github.io/verlin-project/",
    img: "./images/verlin.JPG",
  },
  {
    name: "Guessing-Game",
    link: "https://rahul7740.github.io/guessing-game/",
    img: "./images/guessing-game.JPG",
  },
  {
    name: "social-Media",
    link: "https://rahul7740.github.io/social-media-select-menu/",
    img: "./images/social-media.JPG",
  },
  {
    name: "Buy-Now",
    link: "https://rahul7740.github.io/buy-now-project/",
    img: "./images/buynow.JPG",
  },
  {
    name: "Multiply",
    link: "https://rahul7740.github.io/multiply-task/",
    img: "./images/mujltiply.JPG",
  },
  {
    name: "Age-Calculator",
    link: "https://rahul7740.github.io/age-calculator/",
    img: "./images/age-calculate.JPG",
  },
  {
    name: "Detial-Print",
    link: "https://rahul7740.github.io/Details-Print-task/",
    img: "./images/details-print.JPG",
  },
];

proj.map((value) => {
  let div1 = document.createElement("div");
  div1.classList.add("projects");
  projects_container.appendChild(div1);
  div1.innerHTML = `
                    <img class="projects-picture" src="${value.img}" alt="meditation-centres">
                    <div class="project-details-div">
                        <h3 class="project-names color-green">${value.name}</h3>
                        <a href="${value.link}" title="link" target="_blank" class="project-Btn">Link</a>
                    </div>
                    `;
});

// slider.addEventListener("click", () => {
//   cercle.classList.toggle("cercleNewCss");
//   body.classList.toggle("project-bodyCss");
//   menu.classList.toggle("menuNewCss");

//   for (let c of green) {
//     c.classList.toggle("change-color");
//   }
  
// });


let menu_btn = document.querySelector(".menu-btn")
let right_arrow = document.querySelector(".right-arrow")

menu_btn.addEventListener("click",()=>{
  menu.classList.toggle("menu12")
  right_arrow.classList.toggle("right-arrow-rotate")
})
