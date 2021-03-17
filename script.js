const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".navigation");

toggle.addEventListener('click', () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
})