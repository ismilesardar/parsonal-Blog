const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener
("click", () => {
    if (menu.className === 'hedden' ) {
        menu.classList.remove('hedden');
    }
    else{
        menu.classList.add('hedden');
    }
});