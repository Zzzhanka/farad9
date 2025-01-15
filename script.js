function contactForm() {
    const formSection = document.querySelector('#contacts');
    formSection.scrollIntoView({ behavior: 'smooth' });
}


// Функция для переключения бургер-меню
function toggleMenu() {
    let nav = document.querySelector(".nav-links");
    let burger = document.querySelector(".burger");
    let body = document.body;

    nav.classList.toggle("active");
    burger.classList.toggle("active");
    
    // Отключаем/включаем прокрутку страницы
    if (nav.classList.contains("active")) {
        body.classList.add("no-scroll");
    } else {
        body.classList.remove("no-scroll");
    }
}

function closeMenu() {
    let nav = document.querySelector(".nav-links");
    let burger = document.querySelector(".burger");
    let body = document.body;

    nav.classList.remove("active");
    burger.classList.remove("active");
    body.classList.remove("no-scroll"); // Возвращаем прокрутку
}




