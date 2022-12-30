let lastScroll = 0;
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 50) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});
let options = {
  // root: document.querySelector('#scrollArea'), //specifica que elemento deberá emplear el observer para comprobar la intersección. En el caso de que no lo especifiquemos se tomará por defecto el viewport del navegador.
  rootMargin: "0px",
  threshold: 0.3 //Cantidad a pasar del objeto para ser observado
};

const callback = (entries, observer) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      var image = entry.target;
      image.classList.add("active");
    }
  });
let observer = new IntersectionObserver(callback, options);
document
  .querySelectorAll(".img__about")
  .forEach((img) => observer.observe(img));
document
  .querySelectorAll(".content__about")
  .forEach((content) => observer.observe(content));

document
  .querySelectorAll(".title__menu h2")
  .forEach((h2) => observer.observe(h2));

document
  .querySelectorAll(".line__menu")
  .forEach((line) => observer.observe(line));
