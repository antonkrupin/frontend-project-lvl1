const getRandom = (max) => Math.floor(Math.random() * max);

const checkUserAnswer = (userAnswer, defaultAnswer = 'yes') => {
    if (userAnswer === defaultAnswer) {
        return true;
    }
    return false;
};

export { checkUserAnswer, getRandom };
