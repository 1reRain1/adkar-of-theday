const smallFont = document.getElementById("fs");
const mediumFont = document.getElementById("fm");
const largeFont = document.getElementById("fl");
const section = document.querySelector("section");
smallFont.addEventListener("click", () => {
  section.classList.add("small");
  section.classList.remove("large");
});

mediumFont.addEventListener("click", () => {
  section.classList.remove("large");
  section.classList.remove("small");
});

largeFont.addEventListener("click", () => {
  section.classList.add("large");
  section.classList.remove("small");
});
