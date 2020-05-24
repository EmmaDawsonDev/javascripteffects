const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

//to start on original picture and not the last-clone

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

//Button listeners

nextBtn.addEventListener("click", () => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

//loop the carousel
carouselSlide.addEventListener("transitionend", () => {
    if(carouselImages[counter].id === "last-clone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if(carouselImages[counter].id === "first-clone"){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});