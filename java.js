const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

const mainImage = document.getElementById('pimg');
const smallImages = document.querySelectorAll('.small-img');

smallImages.forEach((smallImg) {
    smallImg.addEventListener('click', (){
        mainImage.src = smallImg.src;

    });
})
