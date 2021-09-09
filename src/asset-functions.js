// eslint-disable-next-line import/no-cycle
import giveExpressionResult from '../games/brain-calc-game.js';
// eslint-disable-next-line import/no-cycle
import giveNODResult from '../games/brain-gcd-game.js';
import startGame from './index.js';

const getRandom = (max) => Math.floor(Math.random() * max);

export const startFuckingGame = (gameName, gameRules) => {
  const functionsObject = {
    giveNODResult,
    giveExpressionResult,
  };
  console.log(typeof (functionsObject[gameName]));
  startGame(functionsObject[gameName], gameRules);
};

/*
    (function(){
    var funcs = {
      funcA: function () { return "a"},
      funcB: function () { return "b"}
    };

    var functionName = "funcA";
    funcs[functionName]();
}();
*/
export default getRandom;
