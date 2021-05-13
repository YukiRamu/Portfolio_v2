//opening
const openingSection = document.querySelector(".opening")
const typingText = document.querySelector(".typingText");
const text = "Once upon a time there was a passionate front-end developer who loved creating innovative websites, making people smile and happy. This is a story of her life." //160 char
const arrow = document.querySelector(".arrow");
const intro = document.querySelector(".intro");
const photo = document.querySelector(".photo");
const fullProf = document.querySelector(".fullProf");
const viewFullProfBtn = document.querySelector(".viewFullProfBtn");
const backToAboutBtn = document.querySelector(".backToAboutBtn");

let count = 0;
const typeWriter = () => {
  typingText.innerHTML += text.charAt(count);
  count++;
  if (count === text.length) {
    clearInterval(timer);
    timer = null;
  };
};

const completeOpening = () => {
  typingText.style.backgroundImage = "unset";
  typingText.style.color = "#ffffff";
  typingText.style.transition = "1s linear";
  openingSection.style.backgroundColor = "#7a392c";
  typingText.style.transition = "1s linear";
  arrow.style.opacity = "1";
  arrow.style.transition = "1s linear";
};

let timer = setInterval(typeWriter, 50); //typeWriterを50msごとに実行

//when the page is loaded
window.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  setTimeout(completeOpening, 10000);
});

//"see full profile" button clicked
viewFullProfBtn.addEventListener("click", () => {
  intro.style.transform = "translateX(165%)";
  intro.style.opacity = "0";
  intro.style.transition = "1s linear";
  photo.style.opacity = "0";
  photo.style.transform = "translateY(165%)";
  photo.style.transition = "1s linear";
  fullProf.style.transform = "translateX(0%)"
  fullProf.style.transition = "1s linear";
});

//"Back" buton clicked
backToAboutBtn.addEventListener("click", () => {
  intro.style.transform = "translateX(0%)";
  intro.style.opacity = "1";
  intro.style.transition = "1s linear";
  photo.style.transform = "translateY(0%)";
  photo.style.opacity = "1";
  photo.style.transition = "1s linear";
  fullProf.style.transform = "translateX(-100%)"
  fullProf.style.transition = "1s linear";
});


