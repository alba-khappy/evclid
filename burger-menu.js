document.getElementsByClassName('hamburger-nav-display')[0].addEventListener('click', function () {
    var menu = document.getElementsByClassName('popup-menu')[0];
    menu.classList.add('open-popup');
});

document.getElementsByClassName('close-popup-menu')[0].addEventListener('click', function() {
    var menu = document.getElementsByClassName('popup-menu')[0];
    menu.classList.remove('open-popup');
})