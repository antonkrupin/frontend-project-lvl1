const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

/* const guessPrimeOrNot = (userName, endGameCounter = 3) => {
  while (isRightAnswer && endOfGame) {
    const number = getRandom(100);
    console.log(`Question: ${number}`);
    const answer = takeUserInput();
    const rightAnswer = isPrime(number);
    if (answer === rightAnswer) {
      userRightAnswerOutput(answer);
      rightAnswerCounter += 1;
    } else {
      userWrongAnswerOutput(userName, answer, rightAnswer);
      isRightAnswer = false;
    }

    endOfGame = isGameEnd(rightAnswerCounter, endGameCounter, userName);
  }
}; */

export default isPrime;
