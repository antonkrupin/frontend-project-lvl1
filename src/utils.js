// не смог понять, как сделать так
// чтобы максимальное значение тоже попадало
// при любых моих решениях в brain-calc вылезали ошибки
// comment
const getRandom = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandom;
