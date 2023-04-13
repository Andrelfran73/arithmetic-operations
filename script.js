
let firstNumber = Number(prompt("Type the first number:"));
let secondNumber = Number(prompt("Type the second number:"));
alert(`The sum of the numbers is: ${firstNumber + secondNumber}`);
let Sum = (firstNumber + secondNumber);
alert(`The subtraction of the numbers is: ${firstNumber - secondNumber}`);
alert(`The multiplication of the numbers is: ${firstNumber * secondNumber}`);
alert(`The  division of the numbers is: ${firstNumber / secondNumber}`);
alert(`The  rest of the numbers is: ${firstNumber % secondNumber}`);

if (Sum % 2 == 0) {
    alert(`The sum of ${firstNumber} and ${secondNumber} is ${Sum}.
    ${Sum} is even.`);
} else {
    alert(`The sum of ${firstNumber} and ${secondNumber} is ${Sum}.
    ${Sum} is odds.`);
}

if (firstNumber === secondNumber) {
    alert(`The numbers ${firstNumber} and ${secondNumber} are same.`);
    
} else {
    alert(`The numbers ${firstNumber} and ${secondNumber} are diferent.`);
    
}