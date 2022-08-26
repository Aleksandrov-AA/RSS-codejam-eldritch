// Version 1 - обычная сложность, один древний Азатот

let randomNum;

function getRandomNum(min, max) {
    randomNum = Math.round(Math.random() * (max - min) + 1);
}

let deckGreen = [];
let deckBrow = [];
let deckBlue = [];

function get3decks(green, brow, blue) { // тут статичные данные для 1 древнего
    green = 5;
    brow = 9;
    blue = 2;    

    for (let gr = 1; gr <= green; gr++) {
        getRandomNum(1, 18);
        if (deckGreen.includes(randomNum) === true) {
            gr -= 1;
            continue;
        } else {
            deckGreen.push(randomNum);
        }
    }

    for (let br = 1; br <= brow; br++) {
        getRandomNum(1, 21);
        if (deckBrow.includes(randomNum) === true) {
            br -= 1;
            continue;
        } else {
            deckBrow.push(randomNum);
        }
    }

    for (let bl = 1; bl <= blue; bl++) {
        getRandomNum(1, 12);
        if (deckBlue.includes(randomNum) === true) {
            bl -= 1;
            continue;
        } else {
            deckBlue.push(randomNum);
        }
    }
}

let randomI;
function getRandomI(min, max) {
    randomI = Math.round(Math.random() * (max - min));
}

let deckStage1 = [];
let deckStage2 = [];
let deckStage3 = [];


function getDeckStage(green, brow, blue) { // решил добавлять к номеру gr, br, bl чтоб понять какого цвета карта, потом через метод split буду проверять к какому цвету относится, сложная логика, но пока так
  let currentCardIndex;
  let currentCard;
  let deckStage = [];
  
  for (let gr = 1; gr <= green; gr++) {
    getRandomI(0, deckGreen.length-1);    
    currentCardIndex = randomI;
    currentCard = deckGreen[currentCardIndex] + ' gr';
    deckStage.push(currentCard);
    deckGreen.splice(currentCardIndex, 1);    
  }
  
  for (let br = 1; br <= brow; br++) {
    getRandomI(0, deckBrow.length-1);    
    currentCardIndex = randomI;
    currentCard = deckBrow[currentCardIndex] + ' br';
    deckStage.push(currentCard);
    deckBrow.splice(currentCardIndex, 1);    
  }

  for (let bl = 1; bl <= blue; bl++) {
    getRandomI(0, deckBlue.length-1);    
    currentCardIndex = randomI;
    currentCard = deckBlue[currentCardIndex] + ' bl';
    deckStage.push(currentCard);
    deckBlue.splice(currentCardIndex, 1);    
  }
  return deckStage;
}

deckStage1 = getDeckStage(1,2,1); // передаю статичные значения сколько карту какого цвета нужно для каждой стадии
// console.log(deckStage1);

deckStage2 = getDeckStage(2,3,1);
// console.log(deckStage2);

deckStage3 = getDeckStage(2,4,0);
// console.log(deckStage3);









function setCard(colour, num) { // сюда уже подаются данные после расшифровки массива стейджа, просто вытаскиваем картинку
    let currentColor;
    if (colour === 'gr') {
        currentColor = 'green';
    } else if (colour === 'br') {
        currentColor = 'brow';
    } else if (colour === 'bl') {
        currentColor = 'blue';
    }

    let cardNum = String(num);
    const lastCard = document.querySelector('.last-card');

    // lastCard.style.backgroundImage = `url('./assets/MythicCards/${currentColor}/${currentColor}${cardNum}.png')`;

    const img = new Image();
    img.src = `./assets/MythicCards/${currentColor}/${currentColor}${cardNum}.png`;
    img.onload = () => {
        lastCard.style.backgroundImage = `url('./assets/MythicCards/${currentColor}/${currentColor}${cardNum}.png')`;
    };    
}


// тестируем
function start() {
    setCard('gr', 1);
}

const deck = document.querySelector('.deck');
deck.addEventListener('click', start);