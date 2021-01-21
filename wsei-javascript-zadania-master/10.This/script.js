//Radosław Rozmus 12452 - This

//Zadanie 1

const person = {
    firstName: "Bartek",
    lastName: "Wiśniewski",
    age: 20,
    country: "Polska",
    city: "Chrzanów"
}
const person2 = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 54,
    country: "Polska",
    city: "Nowy Targ"
}

function writePersonId() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.age);
    console.log(this.country);
    console.log(this.city);
}
function oneYearLater() {
    this.age = this.age + 1;
}

person.writePersonId = writePersonId;
person2.writePersonId = writePersonId;
person.oneYearLater = oneYearLater;
person2.oneYearLater = oneYearLater;

person.writePersonId();
person2.writePersonId();

person.oneYearLater();
person.oneYearLater();
person.oneYearLater();//3 years later

person2.oneYearLater();

person.writePersonId();
person2.writePersonId();

//Zadanie 2

const person = {
    firstName: "Bartek",
    lastName: "Wiśniewski",
    age: 20,
    country: "Polska",
    city: "Chrzanów"
}
const person2 = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 54,
    country: "Polska",
    city: "Nowy Targ"
}

person.favoriteMeals = ["chicken"];
person2.favoriteMeals = ["fish", "chips"];

function writeFavoriteMeals() {
    console.log(this.favoriteMeals);
}
function addFavoriteMeal(meal) {
    this.favoriteMeals.push(meal);
}
person.writeFavoriteMeals = writeFavoriteMeals;
person2.writeFavoriteMeals = writeFavoriteMeals;
person.addFavoriteMeal = addFavoriteMeal;
person2.addFavoriteMeal = addFavoriteMeal;

person.writeFavoriteMeals();
person2.writeFavoriteMeals();

person.addFavoriteMeal("baked potatos");
person2.addFavoriteMeal("swedish meatball burger");

person.writeFavoriteMeals();
person2.writeFavoriteMeals();

//Zadanie 3

calc = {
    a: 0,
    b: 0,

    result: 0
}

function saveNumbers(a, b) {
    this.a = a;
    this.b = b;
    console.log(this.a, this.b);
}

function addition() {
    this.result = this.a + this.b;
    console.log(this.result);
}
function subtraction() {
    this.result = this.a - this.b;
    console.log(this.result);
}
function multiplication() {
    this.result = this.a * this.b;
    console.log(this.result);
}
function division() {
    if (this.b !== 0) {
        this.result = this.a / this.b;
        console.log(this.result);
    } else {
        console.log("Divide by 0 exception")
    }
}

calc.saveNumbers = saveNumbers;
calc.addition = addition;
calc.subtraction = subtraction;
calc.multiplication = multiplication;
calc.division = division;

calc.saveNumbers(10, 5);
calc.addition();
calc.subtraction();
calc.multiplication();
calc.division();

calc.saveNumbers(10, 0);
calc.division();

//Zadanie 4
const ledder = {
    heightInSteps: 1,
    position: 0
}
function setHeight(height) {
    if (height > 0) {
        this.heightInSteps = height;
    }
    else {
        console.log("Wysokość drabiny musi być większa od 0")
    }
}
function stepUp() {
    if (this.position < this.heightInSteps) {
        this.position++;
        console.log(`stopień ${this.position} z ${this.heightInSteps}`);
    }
    else {
        console.log("wyżej się nie da");
    }
}
function stepDown() {
    if (this.position > 0) {
        this.position--;
        console.log(`stopień ${this.position} z ${this.heightInSteps}`);
    }
    else {
        console.log("stoisz na ziemi");
    }
}

ledder.setHeight = setHeight;
ledder.stepUp = stepUp;
ledder.stepDown = stepDown;

