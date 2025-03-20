function randomQuote() {
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
    "Enojy your life!",
    "Be good, do good!",
    "You are unstoppable",
    "You are the very best",
    "Looking fabulous!",
    "You have the most gorgeous eyes!"
  ];

  let randomNumber = Math.floor(Math.random() * quoteArray.length);

  let quote = quoteArray[randomNumber];

  return quote;
}

