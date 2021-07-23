const menuIcon = document.querySelector(".menuIcon");
const menuBody = document.querySelector(".menuBody");

menuIcon.addEventListener("click", () => {
    menuBody.classList.toggle("active");
    menuIcon.classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".text").classList.toggle("hidden");
});