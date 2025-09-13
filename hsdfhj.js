
let num1 = 453;
let num2 = 54
let operator = "*";

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = "Error: Division by zero!";
  }
} else {
  result = "Invalid operator!";
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
 