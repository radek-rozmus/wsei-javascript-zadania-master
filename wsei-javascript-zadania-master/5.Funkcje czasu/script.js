//Radosław Rozmus 12452 - Funkcje czasu

//Zadanie 1
let counter = 1;
const time = setInterval(() => {
    console.log(`Cześć po raz ${counter}`);
    counter++;
    if (counter > 15) {
        clearInterval(time);
    }
}, 3000);


//Zadanie 2

const tab = [1, 2, 3, 4, 5]

const time = setTimeout(() => {
    console.log(tab);
    let counter = 0;
    const time2 = setInterval(() => {
        console.log(tab[counter]);
        counter++;
        if (counter >= tab.length) {
            clearInterval(time2);
            clearTimeout(time);
        }
    }, 3000);
}, 2000);