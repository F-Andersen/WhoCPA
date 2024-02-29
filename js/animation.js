// анімація

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
span.onclick = function() {
  modal.style.display = "none";
}

okBtn.onclick = function() {
  modal.style.display = "none";
}

// Коли користувач клікає поза модальним вікном, закрити його
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
