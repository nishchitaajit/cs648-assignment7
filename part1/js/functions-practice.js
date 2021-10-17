//STEP 1

function halfNumber(number) {
    "use strict";
    var halfOfTheNumber = number / 2;
    document.write("Half of " + number + " is " + halfOfTheNumber + "<br>");
}


//STEP 2

function squareNumber(number) {
    "use strict";
    var squareOfTheNumber = Math.pow(number, 2);
    document.write("The result of squaring the number " + number + " is " + squareOfTheNumber + "<br>");
}

//STEP 3

function percentOf(number1, number2) {
    "use strict";
    var percentResult = number1 / number2 * 100;
    document.write(number1 + " is " + percentResult + "% of " + number2 + "<br>");
}


//STEP 4

function findModulus(number1, number2) {
    "use strict";
    var modulusResult = number2 % number1;
    document.write(modulusResult + " is the modulus of " + number1 + " and " + number2 + "<br>");
}

//STEP 5

function sumOfNumbers(numberArray) {
    "use strict";
    var sum = 0;
    numberArray.forEach(element => {
        sum += parseInt(element);
    });
    document.write("Summation of numbers {" + numberArray + "} is " + sum);
}

function takeUserInput() {
    number = Number(window.prompt("Enter a number"));
    halfNumber(number);
    squareNumber(number);
    window.alert("Input 2 numbers to find the out : 1) percent the first number represents of the second number 2) find out the modulus");
    number1 = Number(window.prompt("Enter first Number"));
    number2 = Number(window.prompt("Enter Second Number"));
    percentOf(number1, number2);
    findModulus(number1, number2);
    var numberArray = window.prompt("Function to find summation of the numbers entered by you. Please enters the numbers delimited by commas. ").split(",");
    sumOfNumbers(numberArray);
}

takeUserInput();
