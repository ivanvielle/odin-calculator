console.log("Hello World");

/*
    GLOBAL VARIABLES
*/
let inputContainer = document.querySelector("#input-container");
let clearBtns = document.querySelectorAll("button.clear-btn");
let numberBtns = document.querySelectorAll("button.number-btn");
let operatorBtns = document.querySelectorAll("button.operator-btn");
let equalBtn = document.querySelector("button#equal-btn");

let operator;
let num1;
let num2;

/*
    Calculator contains functions for all basic math operators
    Add,
    Subtract,
    Multiply,
    Divide
*/
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        inputContainer.textContent = "Invalid operation. Cannot divide by zero";
        return null;
    }

    return num1 / num2;
}

/*
    Operate function to do math computations
*/
function operate() {
    let result;

    /*
        num2 assigned before performing math operations
    */
    if (!num2) {
        num2 = Number(inputContainer.textContent);
    }

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            break;
    }

    /*
        result will be assigned as num1 value
        then num2 will be null as preparation for the next
        operation
    */
    inputContainer.textContent = result;
    num1 = result;
    num2 = null;
}

/*
    Reset function clears all inputs
    Returns operation object to initial state
*/
function reset() {
    inputContainer.textContent = "";
    operator = null;
    num1 = null;
    num2 = null;
}

/*
    Display numbers on input div container
*/
function displayNumber(e) {
    let input = Number(e.target.textContent);

    inputContainer.textContent += input;
}

/*
    Choose an operator function
    then save it to operation object
*/
function chooseOperator(e) {
    operator = e.target.textContent;

    /*
        num1 initially assigned after choosing an operator
    */
    if (!num1) {
        num1 = Number(inputContainer.textContent);
    }

    inputContainer.textContent = "";
}

/*
    Add event listeners to buttons
*/

/*
    number button event listener
*/
for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", displayNumber);
}

/*
    reset button event listener
*/
for (let i = 0; i < clearBtns.length; i++) {
    clearBtns[i].addEventListener("click", reset);
}

/*
    operator button event listener
*/
for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", chooseOperator);
}

/*
    equal button event listener
    to invoke operate function
*/
equalBtn.addEventListener("click", operate);
