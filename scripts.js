
//Function for adding the active class to the hamburger menu.
const navSlide = () => {
    const burger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");

        console.log("click");
    });
}

navSlide();

