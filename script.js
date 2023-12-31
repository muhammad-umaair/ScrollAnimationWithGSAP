var items = document.querySelectorAll(".item img");
items.forEach((val, index) => {
    val.src = "./images/" + (index+1) + ".png";
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "50%+=500px",
    }
});

tl.to(".items img", {scale: 1}, 0);
tl.to(".items", {scale: 2, rotate: 0}, .2);
tl.to(".overlay", {height: "100%"}, .2);
tl.to(".overlay h1", {scale: 1}, .6);
tl.to(".item", {scale: .8, opacity: .2}, .6);