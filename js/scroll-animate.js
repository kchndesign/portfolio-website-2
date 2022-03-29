//using the scrolltop method, animate an element's y rotation

const rotatingElement = document.querySelector(".scroll-rotate");

// get the element passed in, and then
function animateRotateWithScroll(rotatingElement) {
    let degrees = -30 + window.scrollY * (150 / window.innerHeight);

    rotatingElement.style.transform =
        "translatey(-10px) rotatex(-3deg) rotatez(-30deg) scale(0.5) rotateY(" +
        -degrees +
        "deg)";
}

window.addEventListener("scroll", (event) => {
    animateRotateWithScroll(rotatingElement);
});
