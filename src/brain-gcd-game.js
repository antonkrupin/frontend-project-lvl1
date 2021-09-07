// нахождение наибольшего общего делителя
const findNOD = (number1, number2) => {
  if (number2 === 0) {
    return Math.abs(number1);
  }
  return findNOD(number2, number1 % number2);
};

export default findNOD;
