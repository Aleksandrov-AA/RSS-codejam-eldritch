// Version 1 - обычная сложность, один древний Азатот

let randomNum;

function getRandomNum(min, max) {
    randomNum = Math.round(Math.random() * (max - min) + 1);
}

let deckGreen = [];
let deckBrown = [];
let deckBlue = [];

function get3decks(green, brown, blue) { // тут статичные данные для 1 древнего
    green = 5;
    brown = 9;
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

    for (let br = 1; br <= brown; br++) {
        getRandomNum(1, 21);
        if (deckBrown.includes(randomNum) === true) {
            br -= 1;
            continue;
        } else {
            deckBrown.push(randomNum);
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
get3decks();

let randomI;
function getRandomI(min, max) {
    randomI = Math.round(Math.random() * (max - min));
}

let deckStage1 = [];
let deckStage2 = [];
let deckStage3 = [];


function getDeckStage(green, brown, blue) { // решил добавлять к номеру gr, br, bl чтоб понять какого цвета карта, потом через метод split буду проверять к какому цвету относится, сложная логика, но пока так
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
  
  for (let br = 1; br <= brown; br++) {
    getRandomI(0, deckBrown.length-1);    
    currentCardIndex = randomI;
    currentCard = deckBrown[currentCardIndex] + ' br';
    deckStage.push(currentCard);
    deckBrown.splice(currentCardIndex, 1);    
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




// функция корректного счетчика
let st1gr = 1;
let st1br = 2;
let st1bl = 1;
let st2gr = 2;
let st2br = 3;
let st2bl = 1;
let st3gr = 2;
let st3br = 4;
let st3bl = 0;

function showCounterCard() {
    const st1grNum = document.querySelector('.st1gr');
    st1grNum.textContent = st1gr;
    const st1brNum = document.querySelector('.st1br');
    st1brNum.textContent = st1br;
    const st1blNum = document.querySelector('.st1bl');
    st1blNum.textContent = st1bl;

    const st2grNum = document.querySelector('.st2gr');
    st2grNum.textContent = st2gr;
    const st2brNum = document.querySelector('.st2br');
    st2brNum.textContent = st2br;
    const st2blNum = document.querySelector('.st2bl');
    st2blNum.textContent = st2bl;

    const st3grNum = document.querySelector('.st3gr');
    st3grNum.textContent = st3gr;
    const st3brNum = document.querySelector('.st3br');
    st3brNum.textContent = st3br;
    const st3blNum = document.querySelector('.st3bl');
    st3blNum.textContent = st3bl;
}


function showDeckStage1() {    
    getRandomI(0, deckStage1.length-1);    
    let currentIndex = randomI;
    let currentC = deckStage1[currentIndex];
    currentC = currentC.split(' ');
    
    if (currentC[1] === 'gr') {
        st1gr -= 1;               
    } else if (currentC[1] === 'br') {
        st1br -= 1;  
    } else if (currentC[1] === 'bl') {
        st1bl -= 1;  
    }

    deckStage1.splice(currentIndex, 1);
    setLastCard(currentC[1], currentC[0]);    
    showCounterCard();    
}

function showDeckStage2() {    
    getRandomI(0, deckStage2.length-1);    
    let currentIndex = randomI;
    let currentC = deckStage2[currentIndex];
    currentC = currentC.split(' ');
    
    if (currentC[1] === 'gr') {
        st2gr -= 1;               
    } else if (currentC[1] === 'br') {
        st2br -= 1;  
    } else if (currentC[1] === 'bl') {
        st2bl -= 1;  
    }
        
    deckStage2.splice(currentIndex, 1);
    setLastCard(currentC[1], currentC[0]);   
    showCounterCard();    
}

function showDeckStage3() {    
    getRandomI(0, deckStage3.length-1);    
    let currentIndex = randomI;
    let currentC = deckStage3[currentIndex];
    currentC = currentC.split(' ');
    
    if (currentC[1] === 'gr') {
        st3gr -= 1;               
    } else if (currentC[1] === 'br') {
        st3br -= 1;  
    } else if (currentC[1] === 'bl') {
        st3bl -= 1;  
    }
        
    deckStage3.splice(currentIndex, 1);
    setLastCard(currentC[1], currentC[0]);   
    showCounterCard();    
}

function showDeckStage() {
    if (deckStage1.length !== 0) {
        showDeckStage1();
    } else if (deckStage2.length !== 0) {
        showDeckStage2();
    } else if (deckStage3.length !== 0) {
        showDeckStage3();
    } else {
        // колода закончена
        const lastDeck = document.querySelector('.deck');
        lastDeck.style.backgroundImage = 'none';
    }
}


function setLastCard(colour, num) { // сюда уже подаются данные после расшифровки массива стейджа, просто вытаскиваем картинку
    let currentColor;
    if (colour === 'gr') {
        currentColor = 'green';
    } else if (colour === 'br') {
        currentColor = 'brown';
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


function rest() { // неверсно работает перезагрузка данных, ломается логика, решил простым релоудом обойтись
    // const lastCard = document.querySelector('.last-card');
    // lastCard.style.backgroundImage = 'none';

    // st1gr = 1;
    // st1br = 2;
    // st1bl = 1;
    // st2gr = 2;
    // st2br = 3;
    // st2bl = 1;
    // st3gr = 2;
    // st3br = 4;
    // st3bl = 0;
    
    // get3decks();
    // showCounterCard();

    location.reload();
}


// тестируем
function start() {
    showDeckStage();
    // setLastCard('gr', 1);
}

const deck = document.querySelector('.deck');
deck.addEventListener('click', start);

const again = document.querySelector('.again');
again.addEventListener('click', rest);