function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Error: Division by zero is not allowed";
            }
            return num1 / num2;
        default:
            return "Invalid operator! Use +, -, * or /";
    }
}
console.log("Addition:", calculator(15, 15, "+"));
console.log("Subtraction:", calculator(45,5, "-"));
console.log("Multiplication:", calculator(56,6, "*"));
console.log("Division:", calculator(65,6, "/"));
