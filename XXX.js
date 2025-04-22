const Error_menu_open = document.querySelector('.text_info'); //названия всей херни
const close_btn = document.querySelector('.XX')
const module = document.querySelector('.pramougol');
const dark = document.querySelector('.body')
const overlay = document.querySelector('.overlay');

Error_menu_open.addEventListener('click', () => { //вызов меню по клику
    module.classList.add('open');
    dark.classList.add('active')
});

close_btn.addEventListener('click', () => { // закрытие меню
    module.classList.remove('open');
    dark.classList.remove('active')
});

// Получаем элементы DOM
const toggleButton = document.getElementById('toggleButton');


// Функция включения/отключения затемнения
function toggleOverlay() {
    if (overlay.style.display === 'none' || overlay.style.display === '') {
        // Показываем затемнение
        overlay.style.display = 'block';
    } else {
        // Скрываем затемнение
        overlay.style.display = 'none';
    }
}

// Добавляем обработчик события click на кнопку
Error_menu_open.addEventListener('click', toggleOverlay);
close_btn.addEventListener('click', toggleOverlay);