
// АНІМАЦІЯ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// РОБЕ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// РОБЕ НО НА КОСТИЛЯХ  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const changeSectionButtons = document.querySelectorAll('section button[id^="changeSectionButton"]');
const changeSectionButtons_1 = document.getElementById("changeSectionButton_1");
const changeSectionButtons_2 = document.getElementById("changeSectionButton_2");

function changeSection(event) {
  const currentSection = event.target.closest("section");
  const nextSection = currentSection.nextElementSibling || sections[0];

  if (event.target === changeSectionButtons_1) {
    nextSection.classList.remove("hidden");
    currentSection.classList.add("hidden");
    setTimeout(() => {
      const nextNextSection = nextSection.nextElementSibling || sections[0];
      nextNextSection.classList.remove("hidden");
      nextSection.classList.add("hidden");
    }, 3000);
  } else if (event.target === changeSectionButtons_2) {
    const nextNextSection = nextSection.nextElementSibling || sections[0];
    nextSection.classList.remove("hidden");
    currentSection.classList.add("hidden");
    setTimeout(() => {
      nextNextSection.classList.remove("hidden");
      nextSection.classList.add("hidden");
    }, 3000);
  } else {
    nextSection.classList.remove("hidden");
    currentSection.classList.add("hidden");
  }
}

changeSectionButtons.forEach((button) => {
  button.addEventListener("click", changeSection);
});

const sections = document.querySelectorAll("section");
for (let i = 1; i < sections.length; i++) {
  sections[i].classList.add("hidden");
}

