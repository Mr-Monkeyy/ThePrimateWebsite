const monkeyImages = [
  "images/monkey6.jpg",
  "images/monkey8.jpg",
  "images/monkey3.jpg",
  "images/monkey4.jpg",
  "images/monkey5.jpg",
  "images/monkey1.jpg",
  "images/monkey7.jpg",
  "images/monkey2.jpg",
];

const carouselImg = document.getElementById("carousel-img");
const newMonkeyBtn = document.getElementById("newMonkeyBtn");

newMonkeyBtn.addEventListener("click", () => {

  carouselImg.classList.remove("spin");

  void carouselImg.offsetWidth;

  // Add spin
  carouselImg.classList.add("spin");

  // Change image after animatio
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * monkeyImages.length);
    carouselImg.src = monkeyImages[randomIndex];
  }, 200);

});