// kelvin is the variable, the value for kelvin is 293. const because kelvin will not change
const kelvin = 0;
// celsius is the variable, and the value is the variable kelvin subtracted by 273
const celsius = kelvin - 273;
// fahreinheit is the variable, and the value is the variable celsius multiplied by (9/5) plus 32
let fahrenheit = celsius * (9/5) + 32;
// This line rounds down the value of fahrenheit to the closest whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
// This code was written with the assistance of Codeacademy.com. The site advised of the variables to use, suggested how to delcare them. Then what I did was use
the information provided to correctly implement the code. 
