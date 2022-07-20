const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");
const left = document.getElementById("left");
const right = document.getElementById("right");

setInterval(() => {
  let app = document.getElementById("App").offsetWidth;
  document.getElementById("slide-1").style.width = app+"px";
  document.getElementById("slide-2").style.width = app+"px";
  document.getElementById("slide-3").style.width = app+"px";
}, 10);

const SLIDES_COUNT = slides.length;
let current_slide = 0;
let intervalCarousel = 0;

setInterval(() => {
  left.addEventListener("click", () => {
    leftCarousel();
  })
  right.addEventListener("click", () => {
    rightCarousel();
  })
  document.addEventListener("keypress", (event) => {
    const key = event.key;
    console.log(key);
    if (key == 'd') {
      leftCarousel();
    } else if (key == 'a') {
      rightCarousel();
    }
  })

  function leftCarousel() {
    current_slide--;
    intervalCarousel = 0;
    if(current_slide < 0) {
      current_slide = SLIDES_COUNT - 1;
    }
    updateCarousel();
  }
  function rightCarousel() {
    current_slide++;
    intervalCarousel = 0;
    if(current_slide > SLIDES_COUNT - 1) {
      current_slide = 0;
    }
    updateCarousel();
  }
  function updateCarousel() {
    carousel.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`;
    //document.body.style.background = `#${slides[current_slide].getAttribute("data-bg")}`;
  }

  intervalCarousel++;
  if(intervalCarousel > SLIDES_COUNT - 1) {
    rightCarousel();
    intervalCarousel = 0;
  }
}, 1000)
