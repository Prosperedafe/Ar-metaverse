const open = document.getElementById('open');
const menu = document.getElementById('menu')
open.addEventListener('click', () => {
    menu.classList.toggle('menu-open')
})
console.log(menu);