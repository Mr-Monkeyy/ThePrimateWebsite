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

  // Random image
  const randomIndex = Math.floor(Math.random() * monkeyImages.length);
  carouselImg.src = monkeyImages[randomIndex];

  // Spin effect
  carouselImg.style.transform = "rotateY(180deg)";

  setTimeout(() => {
    carouselImg.style.transform = "rotateY(0deg)";
  }, 800);

});