const Error_menu_open = document.querySelector('.text_info'); //названия всей херни
const close_btn = document.querySelector('.XX')
const module = document.querySelector('.pramougol');
const dark = document.querySelector('.body')

Error_menu_open.addEventListener('click', () => { //вызов меню по клику
    module.classList.add('open');
    dark.classList.add('active')
});

close_btn.addEventListener('click', () => { // закрытие меню
    module.classList.remove('open');
    dark.classList.remove('active')
});