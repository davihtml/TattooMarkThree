
const box = document.querySelector(".ConteinerHomeDiv");

window.addEventListener("scroll", () => {
  const maxScroll = 800;
  const scroll = Math.min(window.scrollY, maxScroll);

  const opacity = 1 - scroll / maxScroll;
  const scale = 1 - scroll / maxScroll;

  box.style.opacity = opacity;
  box.style.transform = `scale(${scale})`;

});