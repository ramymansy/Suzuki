let slides = document.querySelectorAll(".slides");
let dots = document.querySelectorAll(".dot");

function setActive(i) {
  for (slide of slides) slide.classList.remove("active");
  slides[i].classList.add("active");
  for (dot of dots) dot.classList.remove("active");
  dots[i].classList.add("active");
}

for (let j = 0; j < dots.length; j++) {
  dots[j].addEventListener("click", function () {
    setActive(j);
  });
}

let menuToggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};
