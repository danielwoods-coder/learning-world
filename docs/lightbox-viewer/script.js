const thumbImg = document.querySelectorAll(".gallery-item");

const lightBox = document.querySelector(".lightbox");

const lightImg = document.querySelector("#lightbox-image");

const caption = document.querySelector("#lightbox-caption");

const srcFull = [
  { src: "https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg", caption: "Stonehenge" },
  { src: "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg", caption: "Storm" },
  { src: "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg", caption: "Trees" }
];

let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  lightImg.setAttribute("src", srcFull[index].src);
  caption.textContent = srcFull[index].caption;
  lightImg.setAttribute("alt", srcFull[index].caption);
  lightBox.classList.add("active");
}

function hideLightbox() {
  lightBox.classList.remove("active");
}

function navigate(direction) {
  currentIndex = (currentIndex + direction + srcFull.length) % srcFull.length;
  lightImg.setAttribute("src", srcFull[currentIndex].src);
  caption.textContent = srcFull[currentIndex].caption;
  lightImg.setAttribute("alt", srcFull[currentIndex].caption);
}

thumbImg.forEach((el, index) => el.addEventListener("click", () => showImage(index)));

const closeBtn = document.querySelector("#close-btn");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  hideLightbox();
});

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navigate(-1);
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navigate(1);
});

lightBox.addEventListener("click", (e) => {
  if (e.target === lightBox) {
    hideLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (!lightBox.classList.contains("active")) return;
  if (e.key === "Escape") hideLightbox();
  if (e.key === "ArrowLeft") navigate(-1);
  if (e.key === "ArrowRight") navigate(1);
});