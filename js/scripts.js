const hambMenu = document.getElementById('hamb-menu');
const navMobile = document.querySelector('.nav__mobile');
const arrows = document.querySelectorAll('.arrow');

//Mobile
const product = document.getElementById('product');
const company = document.getElementById('company');
const connect = document.getElementById('connect');

//Desktop
const productD = document.getElementById('product-d');
const companyD = document.getElementById('company-d');
const connectD = document.getElementById('connect-d');

//Mobile 
const prodDrop = document.querySelector('.product-dropdown');
const compDrop = document.querySelector('.company-dropdown');
const connDrop = document.querySelector('.connect-dropdown');

//Desktop 
const prodDropD = document.querySelector('.product-dropdown-d');
const compDropD = document.querySelector('.company-dropdown-d');
const connDropD = document.querySelector('.connect-dropdown-d')

hambMenu.addEventListener('click', () => {
    navMobile.classList.toggle('show-menu');
    hambMenu.classList.toggle('is-active')
})

for(let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', () => {
        arrows[i].classList.toggle('rotate');
    })
}

//Mobile-Menu

product.addEventListener('click', () => {
    prodDrop.classList.toggle('show-dropdown');
})

company.addEventListener('click', () => {
    compDrop.classList.toggle('show-dropdown');
})

connect.addEventListener('click', () => {
    connDrop.classList.toggle('show-dropdown');
})

//Desktop-Menu

productD.addEventListener('click', () => {
    prodDropD.classList.toggle('show-dropdown');
})

companyD.addEventListener('click', () => {
    compDropD.classList.toggle('show-dropdown');
})

connectD.addEventListener('click', () => {
    connDropD.classList.toggle('show-dropdown');
})