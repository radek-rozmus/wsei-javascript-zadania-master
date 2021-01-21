//Radosław Rozmus 12452 - Operatory

//Zadanie 1
const p = false,
    q = true;

console.log(p == q); // false


//Zadanie 2

const num1 = 7;
const num2 = 2;

let moduloResult = 0;
moduloResult = num1 % num2;
console.log(moduloResult);

//Zadanie 3

const university = 'Wyższa Szkoła Ekonomii i Informatyki';
const city = " w Krakowie";

let stringResult = ``;
stringResult = university + city;
console.log(stringResult);

//Zadanie 4

var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); //true, ponieważ operator == porównuje jedynie wartości
console.log(someNumber === someString); //false, ponieważ operator === porównuje typy oraz wartości

//Zadanie 5

let counter = 30;
console.log(counter);
++counter;
console.log(counter);
--counter;
console.log(counter);

//Zadanie 6

const number1 = 10;
const number2 = 9;

let result = number1 > number2
console.log(result);