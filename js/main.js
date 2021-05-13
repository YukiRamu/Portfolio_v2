/* ========= Variables ========= */
//opening
const openingSection = document.querySelector(".opening");
const typingText = document.querySelector(".typingText");
const text = "Once upon a time there was a passionate front-end developer who loved creating innovative websites, making people smile and happy. This is a story of her life."; //160 char
const arrow = document.querySelector(".arrow");

//nav bar
const navBar = document.querySelector(".nav");
let navBarHeight = navBar.clientHeight;

//about
const aboutSection = document.querySelector(".about");
const introduction = document.querySelector(".indroduction");
const fullProf = document.querySelector(".fullProf");
const intro = document.querySelector(".intro");
const photo = document.querySelector(".photo");
const viewFullProfBtn = document.querySelector(".viewFullProfBtn");
const backToAboutBtn = document.querySelector(".backToAboutBtn");

//skills
const skillSection = document.querySelector(".skills");

//work
const workSection = document.querySelector(".work");

//contact
const contactSection = document.querySelector(".contact");

/* ========= Utilities ========= */
// smooth scroll to the section
const smoothScroll = (id) => {
  let scrollTo = document.getElementById(`${id}`);
  scrollTo.scrollIntoView(({
    behavior: "smooth"
  }), true); // to top
};

//when the page is loaded, apply padding based on the height of nav bar
aboutSection.style.paddingTop = `${navBarHeight}px`;
skillSection.style.paddingTop = `${navBarHeight}px`;
workSection.style.paddingTop = `${navBarHeight}px`;
contactSection.style.paddingTop = `${navBarHeight}px`;

/* ========= Opening ========= */
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
  navBar.style.opacity = "1";
};

let timer = setInterval(typeWriter, 50);

//when the page is loaded
window.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  setTimeout(completeOpening, 9000);
});

/* ========= About ========= */
//"see full profile" button clicked
viewFullProfBtn.addEventListener("click", () => {
  smoothScroll("fullProf");
  //hide all sections
  navBar.style.display = "none";
  openingSection.style.display = "none";
  // fullProf.style.display = "block";
  skillSection.style.display = "none";
  workSection.style.display = "none";
  contactSection.style.display = "none";
  //slide
  intro.style.transform = "translateX(165%)";
  intro.style.opacity = "0";
  intro.style.transition = "1s linear";
  photo.style.opacity = "0";
  photo.style.transform = "translateY(165%)";
  photo.style.transition = "1s linear";
  fullProf.style.transform = "translateX(1%)"
  fullProf.style.transition = "1s linear";
});

//"Back" buton clicked
backToAboutBtn.addEventListener("click", () => {
  smoothScroll("intro");
  //show all sections
  //navBar.style.opacity = "1";

  // openingSection.style.display = "block";
  // skillSection.style.display = "flex";
  // workSection.style.display = "flex";
  // contactSection.style.display = "flex";
  //slide back to about sections
  intro.style.transform = "translateX(-1%)";
  intro.style.opacity = "1";
  intro.style.transition = "1s linear";
  photo.style.transform = "translateY(0%)";
  photo.style.opacity = "1";
  photo.style.transition = "1s linear";
  fullProf.style.transform = "translateX(-100%)"
  fullProf.style.transition = "1s linear";
});


