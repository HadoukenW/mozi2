

function burgerMenu(){
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.navbar__list')
    const body = document.querySelector('body')
    const close = document.querySelector('.close')
    burger.addEventListener('click', () =>{
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.style.display = 'none'
            body.classList.add('locked')
            close.classList.add('active')
        }

    })
    close.addEventListener('click', e => {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
        close.classList.remove('active')
        burger.style.display = 'flex'
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 767) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
    burgerMenu()