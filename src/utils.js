// до этого решения я дошел, но в brain-calc вылезала ошибка
// был выход за пределы массива
// сразу не понял, в чем дело
// просто надо было length-1 поставить
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandom;
