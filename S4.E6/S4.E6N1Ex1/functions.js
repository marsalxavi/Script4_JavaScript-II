// === Funcions amb 3 versions: normal, i 2 Arrow's 
// === Multiplicacio
function multiply(num1, num2) {
    return num1 * num2;
}
var multiplyArrow1 = (num1, num2) => {
    return num1 * num2;
}
var multiplyArrow2 = (num1, num2) => num1 * num2;

// === Farenheit to Celsius
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
var toCelsiusArrow1 = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
}
var toCelsiusArrow2 = (fahrenheit) => (5 / 9) * (fahrenheit - 32);


// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}
var padZerosArrow1 = (num, totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}


function power(base, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
var power = (base, exponent) => {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// === Salutacio
function greet(who) {
    console.log("Hello " + who);
}
var greetArrow1 = (who) => {
    console.log("Hello " + who);
}
var greetArrow2 = (who) => console.log("Hello " + who);