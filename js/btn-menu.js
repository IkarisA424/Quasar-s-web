let btn = document.getElementById("nav__button-menu");
let panel = document.getElementById("nav__list");
btn.onclick = function () {
    panel.classList.toggle("show");
}