const btnToggle = document.querySelector('.btn-toggle');
const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

btnToggle.addEventListener('click', function() {
    this.classList.toggle('active')
    container.classList.toggle('active')
    h1.classList.toggle('active')
    moon.classList.toggle('active')
    sun.classList.toggle('active')
});