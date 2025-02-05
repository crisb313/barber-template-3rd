const nav = document.querySelector('#nav'),
button = document.querySelector('#button');

button.addEventListener("click", () => {
    nav.classList.toggle("visible")
})