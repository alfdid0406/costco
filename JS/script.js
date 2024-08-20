const slides = document.querySelector('#slides');
const img = document.querySelectorAll('#slides img');

let index = 0;
const slideInterval = 3000;

function showSlide(){
    index++;
    if (index >= img.length){
        index = 0;
    }
    const offset = -index * 100;
    slides.style.transform = 'translateX(${offset}%)';
}

setInterval(showSlide, slideInterval);