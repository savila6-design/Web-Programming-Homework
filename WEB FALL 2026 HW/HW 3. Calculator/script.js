alert("Hi Enjoy my calculator! :)");
var firstNumber = "";
var operator = "";

var display = document.getElementById("display");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function press(number) {
    display.value += number;
}

function chooseOperator(op) {
    firstNumber = display.value;
    operator = op;
    display.value = "";
}

function equals() {
    var a = Number(firstNumber);
    var b = Number(display.value);
    var result = 0;

    if (operator == "+") {
        result = add(a, b);
    } else if (operator == "-") {
        result = subtract(a, b);
    } else if (operator == "*") {
        result = multiply(a, b);
    } else if (operator == "/") {
        result = divide(a, b);
    }

    display.value = result;
}

function clearAll() {
    display.value = "";
    firstNumber = "";
    operator = "";
}