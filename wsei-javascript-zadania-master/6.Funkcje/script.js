//Radosław Rozmus 12452 - Funkcje

//Zadanie 1
function itWorks() {
    console.log("Udało się!");
}
itWorks();

//Zadanie 2

const itPrintsParam = (param) => {
    console.log(param);
}
itPrintsParam(10);

//Zadanie 3

const itReturnsArray = function (arr) {
    return arr;
}
const array = [1, 2, 3, 4];
console.log(itReturnsArray(array));

//Zadanie 4

const fiveStrings = (param) => {
    let counter = 0;
    const time = setInterval(() => {
        console.log(param);
        counter++;
        if (counter >= 5) {
            console.log("Koniec");
            clearInterval(time);
        }
    }, 3000);
}