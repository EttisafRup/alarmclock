let navList  = document.querySelector('.navList');
let navul = document.querySelector('.ul');
let navBtn = document.getElementById('butt');
function hide() {
    navul.classList.toggle('hide');
    navList.classList.toggle('hide');
    navBtn.classList.toggle('hide');
}