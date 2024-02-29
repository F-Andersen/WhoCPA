// анімація




function openGift(event) {
  var currentGift = event.currentTarget; // Поточна коробка, на яку клікнули
  var lid = currentGift.querySelector('.lid');
  lid.classList.add('open'); // Додаємо клас, що спрацює анімацію
}

// Отримуємо посилання на всі елементи з класом box-text
var boxTexts = document.querySelectorAll('.box-text');

// Додаємо обробник події для кожного елементу з класом box-text
boxTexts.forEach(function(boxText) {
  boxText.addEventListener('click', openGift); // Викликаємо функцію відкриття подарунка при кліку на текст
});

// 

// Отримуємо посилання на всі елементи з класом box-text
var boxTexts = document.querySelectorAll('.box-text');

// Додаємо обробник події для кожного елементу з класом box-text
boxTexts.forEach(function(boxText) {
  boxText.addEventListener('click', function() {
    openModal(); // Викликаємо функцію відкриття модального вікна при кліку на коробку
  });
});

// Отримуємо посилання на модальне вікно
var modal = document.getElementById("myModal");

// Функція для відкриття модального вікна
function openModal() {
  modal.style.display = "block";
}

// Функція для закриття модального вікна
function closeModal() {
  modal.style.display = "none";
}

// Отримуємо посилання на кнопку "OK"
var okButton = document.getElementById("changeSectionButton_4");

// Додаємо обробник події для кнопки "OK"
okButton.addEventListener('click', function() {
  closeModal(); // Закриваємо модальне вікно при кліку на кнопку "OK"
});




// поява тексту

// Отримуємо всі елементи рядків тексту
const textLines = document.querySelectorAll('#textContainer p, h3');

// Функція для поступового з'явлення рядків тексту
function showText() {
  textLines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.remove('hidden__text');
    }, index * 800); // Затримка для кожного рядка (в мілісекундах)
  });
}

// Викликаємо функцію для поступового з'явлення рядків тексту
showText();

  //  modal

  // Отримання елементів DOM
// Отримання елементів DOM
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
var okBtn = document.getElementById("modalOkBtn");

// Коли користувач клікає на кнопку, відкрити модальне вікно
btn.onclick = function() {
  modal.style.display = "block";
}

// Коли користувач клікає на (x) або кнопку ОК, закрити модальне вікно
// span.onclick = function() {
//   modal.style.display = "none";
// }

// okBtn.onclick = function() {
//   modal.style.display = "none";
// }

// Коли користувач клікає поза модальним вікном, закрити його
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//  5 секція 

// Отримуємо посилання на всі елементи з класом box-text в п'ятій секції
var boxTextsContent5 = document.querySelectorAll('#content5 .box-text');

// Отримуємо посилання на кнопку "OK"
var okButton = document.getElementById("changeSectionButton_5");

// Функція для переходу на наступну секцію
function transitionToNextSection() {
  var nextSection = document.querySelector('#content5').nextElementSibling;
  if (nextSection) {
    nextSection.classList.remove('hidden'); // Показуємо наступну секцію
    document.querySelector('#content5').classList.add('hidden'); // Ховаємо поточну секцію
  }
}

// Додаємо обробник події для кнопки "OK"
okButton.addEventListener('click', function() {
  openModal(); // Викликаємо функцію відкриття модального вікна при кліку на кнопку
  setTimeout(transitionToNextSection, 1000); // Викликаємо перехід на наступну секцію через 2 секунди
});

// Додаємо обробник події для кожного елементу з класом box-text в п'ятій секції
boxTextsContent5.forEach(function(boxText) {
  boxText.addEventListener('click', function() {
    openModal(); // Викликаємо функцію відкриття модального вікна при кліку на коробку
    setTimeout(transitionToNextSection, 1000); // Викликаємо перехід на наступну секцію через 2 секунди
  });
});
