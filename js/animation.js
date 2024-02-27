// анімація

function openGift() {
    var lid = document.querySelector('.lid');
    lid.classList.add('open'); // Додаємо клас, що спрацює анімацію
}

// Отримуємо посилання на елемент з текстом на коробці
var boxText = document.querySelector('.box-text');

// Додаємо обробник події для тексту на коробці
boxText.addEventListener('click', function() {
    openGift(); // Викликаємо функцію відкриття подарунка при кліку на текст
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

