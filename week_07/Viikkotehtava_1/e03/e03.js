// If else statement
var num = 42;
if (num > 50) {
    console.log("Number is greater than 50");
}
else {
    console.log("Number is not greater than 50");
}

// Switch operator
var str = "hello";
switch (str) {
    case "hello":
        console.log("Greetings!");
        break;
    case "goodbye":
        console.log("Farewell!");
        break;
    default:
        console.log("Unexpected input");
        break;
}

// Ternary operator
var bool = true;
var ternaryOperator = (bool == true) ? "Boolean is true" : "Boolean is false";
console.log(ternaryOperator);