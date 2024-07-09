
let heading1 = document.querySelector(".h1");
let profile_piture = document.querySelector(".profile-piture");
let profile_container = document.querySelector(".profile-container")

slider.addEventListener("click", () => {
    heading1.classList.toggle("h1Color");
    profile_container.classList.toggle("profile-container-NewCss")
    profile_piture.classList.toggle("profile-piture-newCss");
})