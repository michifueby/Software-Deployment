module.exports = {
    add,
    subtract,
    isNumberEven
}

/**
 * Add two numbers.
 * @param {*} firstNumber Specified the first number.
 * @param {*} secondNumber Specified the second number.
 * @returns The result of the addition.
 */
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

/**
 * 
 * @param {*} firstNumber Specified the first number.
 * @param {*} secondNumber Specified the second number.
 * @returns The result of the subtraction.
 */
function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

/**
 * Check if a number is even.
 * @param {*} number Specified the number.
 * @returns If the number is even.
 */
function isNumberEven(number) {
    return number % 2 === 0;
}