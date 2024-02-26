// const changeContentButton = document.getElementById('changeContentButton');

// changeContentButton.addEventListener('click', function() {
//   // Знаходимо всі елементи з класом 'hidden' і змінюємо їх клас на 'visible'
//   const hiddenSections = document.querySelectorAll('.hidden');
//   hiddenSections.forEach(section => {
//     section.classList.remove('hidden');
//     section.classList.add('visible');
//   });
// });

// // Знаходимо всі секції і приховуємо їх, крім першої
// const allSections = document.querySelectorAll('section');
// allSections.forEach((section, index) => {
//   if (index !== 0) {
//     section.classList.add('hidden');
//   }
// });

// const changeContentButton = document.getElementById('changeContentButton');
// const sections = document.querySelectorAll('section');
// let currentIndex = 0;

// changeContentButton.addEventListener('click', function() {
//   // Приховуємо поточний елемент
//   sections[currentIndex].classList.add('hidden');

//   // Збільшуємо індекс, але забезпечуємо зациклення
//   currentIndex = (currentIndex + 1) % sections.length;

//   // Показуємо наступний елемент
//   sections[currentIndex].classList.remove('hidden');
// });

// // Приховуємо всі секції, окрім першої
// for (let i = 1; i < sections.length; i++) {
//   sections[i].classList.add('hidden');
// }

// робе

// const changeContentButton = document.getElementById ('changeSectionButton');
// const changeSectionButton = document.getElementById ('changeContentButton');
// // ('changeSectionButton');
// // ('changeContentButton');
// const sections = document.querySelectorAll('section');

// let currentIndex = 0;

// // Функція для зміни секції при натисканні кнопки
// function changeSection() {
//   // Приховуємо поточну секцію
//   sections[currentIndex].classList.add('hidden');

//   // Збільшуємо індекс, але забезпечуємо зациклення
//   currentIndex = (currentIndex + 1) % sections.length;

//   // Показуємо наступну секцію
//   sections[currentIndex].classList.remove('hidden');
// }

// // Навішуємо обробник події на кнопку
// // changeSectionButton.addEventListener('click', changeSection);
// changeContentButton.addEventListener('click', changeSection);

// // Приховуємо всі секції, окрім першої
// for (let i = 1; i < sections.length; i++) {
//   sections[i].classList.add('hidden');
// }

// робе

// Отримуємо всі кнопки "Змінити вміст" у всіх секціях
// const changeSectionButtons = document.querySelectorAll('section button#changeSectionButton');

// // Функція для зміни секції при натисканні кнопки
// function changeSection(event) {
//   const currentSection = event.target.closest('section'); // Отримуємо батьківську секцію кнопки, на яку натиснуто
//   currentSection.classList.add('hidden'); // Приховуємо поточну секцію
//   const nextSection = currentSection.nextElementSibling; // Отримуємо наступну секцію
//   if (nextSection) {
//     nextSection.classList.remove('hidden'); // Показуємо наступну секцію, якщо вона існує
//   } else {
//     sections[0].classList.remove('hidden'); // Якщо немає наступної секції, показуємо першу
//   }
// }

// // Навішуємо обробник події на кожну кнопку "Змінити вміст"
// changeSectionButtons.forEach(button => {
//   button.addEventListener('click', changeSection);
// });

// // Приховуємо всі секції, окрім першої
// const sections = document.querySelectorAll('section');
// for (let i = 1; i < sections.length; i++) {
//   sections[i].classList.add('hidden');
// }

// function openGift() {
//     var lid = document.querySelector('.lid');
//     lid.classList.add('open'); // Додаємо клас, що спрацює анімацію
// }

// // Отримуємо посилання на елемент з текстом на коробці
// var boxText = document.querySelector('.box-text');

// // Додаємо обробник події для тексту на коробці
// boxText.addEventListener('click', function() {
//     openGift(); // Викликаємо функцію відкриття подарунка при кліку на текст
// });

// const changeSectionButtons = document.querySelectorAll('section button#changeSectionButton');

// function changeSection(event) {
//   const currentSection = event.target.closest('section');
//   const nextSection = currentSection.nextElementSibling || sections[0];
//   nextSection.classList.remove('hidden');
//   currentSection.classList.add('hidden');
// }

// changeSectionButtons.forEach(button => {
//   button.addEventListener('click', changeSection);
// });

// const sections = document.querySelectorAll('section');
// for (let i = 1; i < sections.length; i++) {
//   sections[i].classList.add('hidden');
// }

// function changeSectionManually() {
//   const visibleSection = document.querySelector('section:not(.hidden)');
//   if (!visibleSection) return;

//   const nextSection = visibleSection.nextElementSibling || sections[0];
//   if (visibleSection.id === 'content2') {
//     nextSection.classList.remove('hidden');
//     visibleSection.classList.add('hidden');
//   }

// }

// if (document.getElementById('content2')) {
//   setInterval(changeSectionManually, 1000);
// }

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
