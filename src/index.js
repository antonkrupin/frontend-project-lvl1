import takeUserInput, { greetUser, userRightAnswerOutput, userWrongAnswerOutput } from './cli.js';

const gameRoundCounter = 3;
// общая функция для старта игры
const startGame = (gameFunction, gameRules) => {
  let rightAnswersCounter = 0;
  const userName = greetUser();
  console.log(gameRules);
  for (let i = 0; i < gameRoundCounter; i += 1) {
    const result = gameFunction(userName);
    console.log(`Question: ${result[0]}`);
    const answer = takeUserInput();
    if (answer === result[1]) {
      userRightAnswerOutput(answer);
    } else {
      userWrongAnswerOutput(userName, answer, result[1]);
      break;
    }
    rightAnswersCounter += 1;
  }
  if (rightAnswersCounter === gameRoundCounter) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
