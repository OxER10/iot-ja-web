// Function square
function square(x) {
    let squared = x * x;
    return squared;
}
console.log(square(2)); // 4
console.log(square(4)); // 16

// Function sum
function sum(x, y) {
    let summed = x + y;
    return summed;
}
console.log(sum(2, 3)); // 5
console.log(sum(4, 5)); // 9

// Function isPositive
function isPositive(x) {
    if (x > 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPositive(2)); // true
console.log(isPositive(-2)); // false

// Function calculateArea
function calculateArea(x, y) {
    let area = x * y;
    return area;
}
console.log(calculateArea(10, 5)); // 50

// Function calculateVolume
function calculateVolume(x, y, z) {
    let volume = x * y * z;
    return volume;
}
console.log(calculateVolume(10, 5, 2)); // 100

// Function convertCelsiusToFahrenheit
function convertCelsiusToFahrenheit(x) {
    let fahrenheit = x * 9 / 5 + 32;
    return fahrenheit;
}
console.log(convertCelsiusToFahrenheit(0)); // 32