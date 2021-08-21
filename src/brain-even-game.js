const getRandom = (max) => Math.floor(Math.random() * max);

const checkUserAnswer = (userAnswer, defaultAnswer = 'yes') => {
    if (userAnswer === defaultAnswer) {
        return true;
    }
    return false;
};

export { checkUserAnswer, getRandom };

/*

if (answer !== 'yes' || answer !== 'no') {
        console.log(`${answer} is wrong answer ;(. You need answer 'yes' or 'no'`);
        console.log(`Let\`s try again, ${userName}`);
        isRightAnswer = false;
    }

if ((checkUserAnswer(answer, 'no') && divisionRemainder === 0)
        || (checkUserAnswer(answer) && divisionRemainder !== 0)) {
        if (answer === 'yes') {
            console.log(`${answer} is wrong answer ;(. Correct was 'no'`);
            console.log(`Let\`s try again, ${userName}`);
            isRightAnswer = false;
        }
        console.log(`${answer} is wrong answer ;(. Correct was 'yes'`);
        console.log(`Let\`s try again, ${userName}`);
        isRightAnswer = false;
    }

    if ((checkUserAnswer(answer) && divisionRemainder === 0)
        || (checkUserAnswer(answer, 'no') && divisionRemainder !== 0)) {
        console.log(`Your answer: ${answer}`);
        console.log('Correct!');
        rightAnswerCounter += 1;
        isRightAnswer = true;
    }

    if (rightAnswerCounter === 3) {
        console.log(`Congratulations, ${userName}!`);
        isRightAnswer = false;
    }
*/
