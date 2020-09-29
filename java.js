function isEven(num) {
    return num % 2 == 0;
}

function fact(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function kebabToSnake(str) {
    let newStr = str.replace(/-/g, "_");
    return newStr;
}