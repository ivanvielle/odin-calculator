console.log("Hello World");

// GLOBAL VARIABLES
let inputContainer = document.querySelector("#input-container");
let clearBtn = document.querySelectorAll("button.clear-btn");
let numberBtn = document.querySelectorAll("button.number-btn");
let operatorBtn = document.querySelectorAll("button.operator-btn");

let operation = {
    operator: null,
    num1: null,
    num2: null,
};

/*
    Calculator contains functions for all basic math operators
    Add,
    Subtract,
    Multiply,
    Divide
*/

function add(num1, num2) {
    let result = num1 + num2;

    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;

    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;

    return result;
}

function divide(num1, num2) {
    let result = num1 / num2;

    return result;
}

/*
    Operate function to do math computations
*/
function operate(operation) {
    switch (operation.operator) {
        case "+":
            add(operation.num1, operation.num2);
        case "-":
            subtract(operation.num1, operation.num2);
        case "*":
            multiply(operation.num1, operation.num2);
        case "/":
            divide(operation.num1, operation.num2);
        default:
            null;
    }
}

/*
    Reset function clears all inputs
*/
function reset() {
    inputContainer.textContent = "";
}

for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener("click", function (e) {
        if (!inputContainer.textContent) {
            if (Number(e.target.textContent) == 0) {
                inputContainer.textContent = inputContainer.textContent;
            } else {
                inputContainer.textContent = Number(e.target.textContent);
            }
        } else {
            inputContainer.textContent += Number(e.target.textContent);
        }
    });
}

for (let i = 0; i < clearBtn.length; i++) {
    clearBtn[i].addEventListener("click", reset);
}
