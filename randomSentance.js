const yourQuotes = [];

const quoteArray = [
  "Smile today!",
  "You are someones sunshine!",
  "You got THIS!",
  "Keep shining!",
  "Dream big!",
  "Stay magical!",
  "Stay positive",
  "Make it fun!",
  "You matter!",
  "Enjoy your life!",
  "Be good, do good!",
  "You are unstoppable!",
  "You are the very best!",
  "Looking fabulous!",
  "You have the most gorgeous eyes!"
];

const messageWindow = document.getElementById('messageWindow');
const historyWindow = document.getElementById("historyWindow");
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");

function randomQuote() {
  let randomNumber = Math.floor(Math.random() * quoteArray.length);
  return quoteArray[randomNumber];
}

function generateQuote() {
  const newQuote = randomQuote();
  messageWindow.textContent = newQuote;

  const historyItem = document.createElement('li');
  historyItem.textContent = newQuote;
  historyWindow.appendChild(historyItem);
}

function resetHistory(){
  historyWindow.innerHTML = " ";
}

generateBtn.addEventListener('click', generateQuote);
resetBtn.addEventListener('click', resetHistory);
/*
for(let i = 0; i <10;i++){
  randomQuote();
}
console.log(yourQuotes);
*/



