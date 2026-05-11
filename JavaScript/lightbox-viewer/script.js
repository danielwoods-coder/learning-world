const thumbImg = document.querySelectorAll(".gallery-item");

const lightBox = document.querySelector(".lightbox");

const lightImg = document.querySelector("#lightbox-image");

const srcFull = ["https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg", "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg", "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg"];

thumbImg.forEach((el, index) => el.addEventListener("click", () => {
  lightBox.style.display = "flex";
  lightImg.setAttribute("src", srcFull[index])
}));

const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", () => lightBox.style.display = "none");
lightBox.addEventListener("click", () => lightBox.style.display = "none");