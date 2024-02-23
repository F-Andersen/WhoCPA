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
