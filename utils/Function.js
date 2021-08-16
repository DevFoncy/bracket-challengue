const { REGEX_EXPRESSION_LETTERS,  REGEX_EXPRESSION_ORDER} = require("./Constant");

const convertIntoUpperCase = (number) => {
    return number.toUpperCase().replace(/ +/g, '');
}

const isValidNumberOrder = (number) => {
    return REGEX_EXPRESSION_ORDER.test(number);
}

const isValidNumberLetters = (number) => {
    return REGEX_EXPRESSION_LETTERS.test(number);
}

const isValidNumber = (number) => {
    return isValidNumberOrder(number) && isValidNumberLetters(number);
}

module.exports = {isValidNumber,convertIntoUpperCase};