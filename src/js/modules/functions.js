import Swiper from 'swiper';
import { Navigation } from 'swiper';

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
    let swiper = new Swiper(".product__images--gallery", {
        modules: [ Navigation ],
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1050: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
    });
}