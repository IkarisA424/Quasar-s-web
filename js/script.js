let btn = document.getElementById("nav__button-menu");
let panel = document.getElementById("nav__list");
btn.onclick = function () {
    if (panel.classList.contains("show")) {
        panel.classList.remove("show");
    } else {
        panel.classList.add("show");
    }
}