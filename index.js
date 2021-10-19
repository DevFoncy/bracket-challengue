const { SYMBOL_LEFT, SYMBOL_RIGHT } = require("./utils/Constant");

const isBracket= (s) => {
  let stack = []
  for(let bracket of s) {
    let isNotBracket = bracket !== SYMBOL_LEFT && bracket !== SYMBOL_RIGHT
    if (isNotBracket) continue
    if(bracket === SYMBOL_LEFT) {
      stack.push(SYMBOL_LEFT)
    } else {
      if(stack.length === 0 || stack.pop() !== SYMBOL_LEFT) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = isBracket;