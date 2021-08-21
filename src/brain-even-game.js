const getRandom = (max) => Math.floor(Math.random() * max);

const checkUserAnswer = (userAnswer, defaultAnswer = 'yes') => {
    if (userAnswer === defaultAnswer) {
        return true;
    }
    return false;
};

const userWrongAnswerOutput = (userName, userAnswer, correctAnswer = 'no') => {
    console.log(`${userAnswer} is wrong answer ;(. Correct was '${correctAnswer}'`);
    console.log(`Let\`s try again, ${userName}`);
};

export { checkUserAnswer, getRandom, userWrongAnswerOutput };
