const { LETTERS_ROMAIN} = require("./utils/Constant");
const { isValidNumber,convertIntoUpperCase} = require("./utils/Function");

const converRomainToInt= (s) => {
    const number = convertIntoUpperCase(s);
    const isValid = isValidNumber(number);
    if(isValid){
        let array = number.split('');
        let total = 0;
        let current;
        let currentValue;
        let next;
        let nextValue;
     
        for(let i=0; i < array.length; i++){
            current=array[i];
            currentValue = LETTERS_ROMAIN[current];
    
            next = array[i+1];
            nextValue = LETTERS_ROMAIN[next];
    
            if(currentValue < nextValue) 
                total -= (currentValue);
            else
               total += (currentValue);
        }
        return total;
    }
    return false;
};

module.exports = converRomainToInt;