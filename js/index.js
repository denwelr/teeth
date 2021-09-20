

/* Количество колонок в секции "Услуги" */
/* Изначальное значение */
let servicesColumnsCount = 5;


$(document).ready(function(){
/* Слайдеры */
$('.awards__slider').slick({
    prevArrow: $('.awards__btn_prev'),
    nextArrow: $('.awards__btn_next'),
    slidesToShow: 3,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1550,
          settings: {
            slidesToShow: 2,
          }
        },
        {
        breakpoint: 1060,
        settings: {
            slidesToShow: 1,
        }
        },
    ]
});

$('.benefits__slider-wrapper').slick({
    prevArrow: $('.benefits__slider-btn_prev'),
    nextArrow: $('.benefits__slider-btn_next'),
});
/* /Слайдеры */

/* Кнопка "Наверх" */
const wrapper = document.querySelector('.wrapper');
const bodyLink = document.querySelector('.body-link');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > parseInt(getComputedStyle(wrapper).height) - 1000) bodyLink.classList.add('body-link_visible');
    else bodyLink.classList.remove('body-link_visible');
});
bodyLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
})
/* /Кнопка "Наверх" */ 

/* Бургер-меню */

const burgerEl = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__navigation');
burgerEl.addEventListener('click', () => {
    burgerEl.classList.toggle('header__burger_active');
    headerNav.classList.toggle('header__burger_active');
    document.body.classList.toggle('hidden');

    /* Убираем кнопку если открыт бургер */
    bodyLink.classList.remove('body-link_visible');
});

/* /Бургер-меню */

/* Закрытие бургера при клике на ссылку из меню */
const burgerLinks = document.querySelectorAll('.header__nav a');

burgerLinks.forEach(item=>{
    item.addEventListener('click', ()=>{
        if(burgerEl.classList.contains('header__burger_active')) {
            burgerEl.classList.remove('header__burger_active');
            headerNav.classList.remove('header__burger_active');
            document.body.classList.remove('hidden');
        }
    });
});
/* /Закрытие бургера при клике на ссылку из меню */

const awardsSliderWrapper = document.querySelector('.awards__container');
const socials = document.querySelector('.header__socials');
const workMode = document.querySelector('.header__work-mode');
const address = document.querySelector('.header__address');
const headBtn = document.querySelector('.header__head-btn');
const telNumber = document.querySelector('.header__tel');

window.addEventListener('resize', () => {
    if(window.innerWidth < 750 && !awardsSliderWrapper.classList.contains('awards__container_short')) {
        const awardsSliderNav = document.querySelectorAll('.awards__nav');
        const newContainer = document.createElement('div');
        
        newContainer.classList.add('awards__nav-wrapper');
        awardsSliderWrapper.classList.add('awards__container_short');

        awardsSliderNav.forEach(item=>{
            newContainer.append(item);
        });
        awardsSliderWrapper.append(newContainer);
    }

    /* Колонки в секции "Услуги" */
    if(window.innerWidth < 1670) {
        servicesColumnsCount = 4;
    } 
    if(window.innerWidth < 1337) {
        servicesColumnsCount = 3;
    } 
    if(window.innerWidth < 1004) {
        servicesColumnsCount = 2;
    }
    if(window.innerWidth < 571) {
        servicesColumnsCount = 1;
    }
});

/* Липкий хедер */ 
const header = document.querySelector('.header__head');
window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 20) header.classList.add('header__head_fixed');
    if(window.pageYOffset < 20) header.classList.remove('header__head_fixed');
});
/* /Липкий хедер */ 


/* Форма выбора услуги */

const services = document.querySelectorAll('.services__item');
for(let i = 0; i < services.length; i++) {
    services[i].addEventListener('click', function(){
        // если форма уже создана, то удаляем её
        if(document.querySelector('.services__form') !== null) document.querySelector('.services__form').remove();

        // алгоритм получения последнего элемента строки
        // берется номер итерации, делется на кол-во колонок и округляется в меньшую сторону
        // 3 / 4 = 0.75 => 0
         // 7 / 4 = 1.75 => 1
         // так мы получаем номер строки из сетки из кол-ва колонок

         // далее прибавляется 1 чтобы при умножении на кол-во колонок не получилось 0
         // умножение на кол-во колонок нужно чтобы получить крайний элемент строки
        const end = (Math.floor(i / servicesColumnsCount) + 1) * servicesColumnsCount;

        // создаем форму
        const elem = document.createElement('div');
        elem.classList.add('services__form');

        // создаем форму после конца строки
        // если последнего элемента строки нет (в строке меньше 4 элементов) то форма создается в самом конце блоков услуг
        if(end - 1 >= services.length) {
            services[services.length - 1].after(elem);
        } else {
            services[end - 1].after(elem);
        }
       
        // наполняем содержимым
        elem.insertAdjacentHTML('beforeend', `
            <div class="services__row">
                <div class="services__product">
                    <div class="services__product-name">
                        Световая пломба
                    </div>
                    <div class="services__product-price">
                        3 800 ₽
                    </div>
                </div>
                <button class="btn services__btn">
                        Записаться
                </button>
            </div>

            <div class="services__row">
                <div class="services__product">
                    <div class="services__product-name">
                        Световая пломба
                    </div>
                    <div class="services__product-price">
                        3 800 ₽
                    </div>
                </div>
                <button class="btn services__btn">
                        Записаться
                </button>
            </div>

            <div class="services__row">
                <div class="services__product">
                    <div class="services__product-name">
                        Лечение кариеса
                    </div>
                    <div class="services__product-price">
                        3 800 ₽
                    </div>
                </div>
                <button class="btn services__btn">
                        Записаться
                </button>
            </div>

            <div class="services__row">
                <div class="services__product">
                    <div class="services__product-name">
                        Лечение пульпита
                    </div>
                    <div class="services__product-price">
                        6 000 ₽
                    </div>
                </div>
                <button class="btn services__btn">
                        Записаться
                </button>
            </div>
            <div class="services__row">
                <div class="services__product">
                    <div class="services__product-name">
                        Лечение кисты
                    </div>
                    <div class="services__product-price">
                        4 450 ₽
                    </div>
                </div>
                <button class="btn services__btn">
                        Записаться
                </button>
            </div>
        `);

        // плавный скролл
        elem.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
        });
    });
    
}

/* /Форма выбора услуги */
});


