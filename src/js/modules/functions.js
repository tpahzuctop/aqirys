import Swiper from 'swiper';

export function isWebp() {
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        }
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
        console.log(className);
    });
}

export function gallerySlider() {
    const swiper = new Swiper('.swiper-gallery', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        slidesOffsetBefore: 10,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 3,
                slidesOffsetBefore: -70,
            },
            1024: {
                slidesPerView: 4,
                slidesOffsetBefore: 0
            }
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
}