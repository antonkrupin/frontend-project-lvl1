// не смог понять, как сделать так
// чтобы максимальное значение тоже попадало
// при любых моих решениях в brain-calc вылезали ошибки
const getRandom = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

export default getRandom;
