const navbar = document.querySelector('header');
let lastScrollY = 2; 
const threshold = 70; 

function activeScroll() {
    if (scrollY >= threshold && lastScrollY < threshold) {
        navbar.classList.add('ativo');
    } else if (scrollY <= threshold && lastScrollY >= threshold) {
        navbar.classList.remove('ativo');
    }
    lastScrollY = scrollY;
}

window.addEventListener('scroll', activeScroll);

document.querySelector('.menu_mobile button').addEventListener('click', function() {
    document.querySelector('.menu_mobile').classList.toggle('active');
});

document.querySelector('.exit_menu').addEventListener('click', function() {
    document.querySelector('.menu_mobile').classList.toggle('active');
});
