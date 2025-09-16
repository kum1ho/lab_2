// Завдання 1.1: Робота з inline-стилями

document.body.style.fontFamily = 'Arial';

let paragraphs = document.querySelectorAll('p');

paragraphs[0].style.color = 'orange';
paragraphs[0].style.backgroundColor = 'yellow';
paragraphs[0].style.fontSize = '16px';
paragraphs[0].style.padding = '5px';
paragraphs[0].style.textAlign = 'center';

paragraphs[1].style.color = 'blue';
paragraphs[1].style.backgroundColor = 'lightblue';
paragraphs[1].style.fontSize = '14px';
paragraphs[1].style.padding = '5px';
paragraphs[1].style.textAlign = 'right';

paragraphs[2].style.color = 'red';
paragraphs[2].style.backgroundColor = 'lightcoral';
paragraphs[2].style.fontSize = '12px';
paragraphs[2].style.padding = '5px';
paragraphs[2].style.textAlign = 'left';

// Завдання 1.2: Робота з класами 

let cells = document.querySelectorAll('td');

let selectedIndexes = [
    0, 2, 4,
    6, 8,
    10, 12, 14,
    16, 18,
    20, 22, 24
];

selectedIndexes.forEach(function(index) {
    if (cells[index]) {
        cells[index].classList.add('selected');
    }
});

// Завдання 2: Основи роботи з рядками
// Рядок тексту з яким пряцюємо.
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!';

// 1) Створення рядка з символів
let newString = text[12] + text[6] + text[18] + text[25];
console.log('Завдання 2.1:', newString);

// 2) Приведення рядка до нижнього регістру
let lowerCaseText = text.toLowerCase();
console.log('Завдання 2.2:', lowerCaseText);

// 3) Пошук всіх позицій послідовності "in"
let positions = [];
let index = text.indexOf('in');
while (index !== -1) {
    positions.push(index);
    index = text.indexOf('in', index + 1);
}
console.log('Завдання 2.3:', positions);

// 4) Розділення рядка на масив підрядків
let wordsArray = text.split(' ');
console.log('Завдання 2.4:', wordsArray);

// 5) Інвертування рядка
let reversedText = text.split('').reverse().join('');
console.log('Завдання 2.5:', reversedText);
// Альтернативний варіант інвертування рядку. Інвертування порядку слів.
let reversedWordsText = text.split(' ').reverse().join(' ');
console.log('Або:', reversedWordsText);

// 6) Функція ucFirst(txt)
function ucFirst(txt) {
    if (!txt) {
        return '';
    }
    let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
    return newTxt;
}
console.log('Завдання 2.6:', ucFirst('some text'));