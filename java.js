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

let i=0;
let imgArray=['banner2.jpg','Banner.01.jpg'];

function changeImg(){
    document.getElementById('slideshow').src=imgArray[i];
    if(i < imgArray.length - 1){
i++;
    }
   else{
    i=0;
   }
}

document.addEventListener(onload, changeImg);