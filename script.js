/*navbar js*/
const btn = document.querySelector(".btn-container");
const nav = document.querySelector(".nav-ul");

function myFunction() {
    btn.classList.toggle("change");
    nav.classList.toggle("change");
}

/*single products js*/

const mainImg = document.getElementById("main-img")
const smallImg = document.querySelectorAll('.sm-img')

smallImg.forEach(small => {
    small.addEventListener('click', () => {
        mainImg.src = small.src
        small.src = mainImg.src
    })
})