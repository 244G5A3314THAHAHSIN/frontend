
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

let num = 17;
console.log("Factorial of", num, "is", factorial(num))
