
//Radosław Rozmus 12452 - Tablice

//Zadanie 1

const tab = [10, "element", null, { country: "Polska", city: "Kraków" }];

tab.forEach(element => {
    console.log(element);
});

//Zadanie 2

const tab2 = [10, "element", null, { country: "Polska", city: "Kraków" }, 1, 2, 3, 4];
//1.
console.log(tab2[0], tab2[1]);
//2.
console.log(tab2[tab2.length - 1]);
//3.
tab2.forEach(element => {
    console.log(element);
});
//4.
for (let i = 0; i < tab2.length; i++) {
    if (i % 2 == 0) {
        console.log(tab2[i]);
    }
}
//5.
for (let i = 0; i < tab2.length; i++) {
    if (typeof tab2[i] === 'string') {
        console.log(tab2[i]);
    }
}
//6.
for (let i = 0; i < tab2.length; i++) {
    if (typeof tab2[i] === 'number') {
        console.log(tab2[i]);
    }
}

//Zadanie 3

const tab3 = [10, 3, 8, 123, 19, 97, 66, 41];

//1.

const add = (() => {
    let result = 0;
    tab3.forEach(element => {
        result += element
    });
    return result;
})();

console.log(add);
//2.
const sub = (() => {
    let result = 0;
    tab3.forEach(element => {
        result -= element
    });
    return result;
})();

console.log(sub);
//3.
console.log(add / tab3.length);//sumę liczb mamy w zmiennej add z 1 podpunktu
//4.
const ev = tab3.filter(element => {
    return element % 2 == 0;
});

console.log(ev);
//5.
const odd = tab3.filter(element => {
    return element % 2;
});

console.log(odd)
//6.
console.log(Math.max.apply(Math, tab3));
//7.
console.log(Math.min.apply(Math, tab3));
//8.
console.log(tab3.reverse());

//Zadanie 4

const addition = (tab) => {
    let result = 0;
    tab.forEach(element => {
        result += element
    });
    console.log(result);
    return result;
}
addition([1, 2, 3]);


//Zadanie 5

const averageMultiplication = (tab) => {
    let result = 0;
    tab.forEach(element => {
        result += element
    });
    const average = result / tab.length
    tab.map(element => {
        console.log(element * 2);
    })
}
averageMultiplication([1, 2, 3]);

//Zadanie 6

const evenAverage = (tab) => {
    let result = 0;
    const tabToFilter = tab.filter(element => {
        return element % 2 == 0;
    });
    tabToFilter.forEach(element => {
        result += element
    });
    const average = result / tabToFilter.length
    return average;
}
console.log(evenAverage([1, 2, 3, 4, 5, 6, 7, 8]));

//Zadanie 7

function sorting(tab) {
    const result = tab.sort((a, b) => {
        return a - b;
    });
    console.log(result);
    return result;
}

sorting([2, 1, 5, 9, 7, 4, 3, 6, 8]);


//Zadanie 8
function sumIndexes(tab1, tab2) {
    let result = [];
    for (let i = 0; i < tab1.length; i++) {
        result.push(tab1[i] + tab2[i]);
    }
    return result;
}
console.log(sumIndexes([-2, -1, -5], [2, 1, 0]));

function sumIndexes(tab1, tab2) {
    let result = [];
    for (let i = 0; i < tab1.length; i++) {
        result.push(tab1[i] + tab2[i]);
    }
    return result;
}
console.log(sumIndexes([-2, -1, -5], [2, 1, 0]));

//Zadanie 9
function deleteElement(tab, toDelete) {
    const result = tab.filter(element => {
        return element !== toDelete;
    })
    return result;
}
console.log(deleteElement([-2, -1, -5, -9, 7, 4, 3, 6, 8], -5));

//Zadanie 10

function reverseNumber(tab) {
    const result = tab.map(element => {
        return -element;
    })
    return result;
}
console.log(reverseNumber([-2, -1, -5, -9, 7, 4, 3, 6, 8]));