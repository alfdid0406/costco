document.addEventListener('DOMContentLoaded', function(){
    const slides = document.querySelector('#slides');
    const slideImages = document.querySelectorAll('#slides img');
    const totalSlides = slideImages.length;
    let currentIndex = 0;

    function showSlide(index){
        if (index >= totalSlides){
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(${-currentIndex*100}%)`;
    }

    document.querySelector('#prev').addEventListener('click', function(){
        showSlide(currentIndex - 1);
    });

    document.querySelector('#next').addEventListener('click', function(){
        showSlide(currentIndex + 1);
    });

    setInterval(function(){
        showSlide(currentIndex + 1);
    }, 4000);
});