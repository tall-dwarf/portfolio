import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'swiper';


const swiper = new Swiper('.swiper-container', {
    loop: true,
});

document.querySelector('#works-swiper-button-next').addEventListener('click', () => swiper.slideNext())
document.querySelector('#works-swiper-button-prev').addEventListener('click', () => swiper.slidePrev())