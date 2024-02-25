const changeContentButton = document.getElementById('changeContentButton');

changeContentButton.addEventListener('click', function() {
  // Знаходимо всі елементи з класом 'hidden' і змінюємо їх клас на 'visible'
  const hiddenSections = document.querySelectorAll('.hidden');
  hiddenSections.forEach(section => {
    section.classList.remove('hidden');
    section.classList.add('visible');
  });
});

// Знаходимо всі секції і приховуємо їх, крім першої
const allSections = document.querySelectorAll('section');
allSections.forEach((section, index) => {
  if (index !== 0) {
    section.classList.add('hidden');
  }
});

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
