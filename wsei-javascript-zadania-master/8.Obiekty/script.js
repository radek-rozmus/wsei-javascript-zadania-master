//Radosław Rozmus 12452 - Obiekty

//Zadanie 1
const car = {
    name: 'Mazda',
    color: 'red',
    topSpeed: 203,
    age: 10
}
console.log(car.name);
console.log(car.color);
console.log(car.topSpeed);
console.log(car.age);



//Zadanie 2

const car = {
    name: 'Mazda',
    color: 'red',
    topSpeed: 203,
    age: 10,

    rename: function (Name) {
        this.name = Name;
    }
}
car.rename("BMW");

//Zadanie 3

const obj = {
    sum: 0,

    addition: function (tab) {
        let result = 0;
        tab.forEach(element => {
            result += element
        });
        this.sum = result;
    }
}

obj.addition([1, 2, 3, 4]);
console.log(obj.sum)

//Zadanie 4

const car = {
    name: 'Mazda',
    color: 'red',
    topSpeed: 203,
    age: 10,
}

for (let key in car) {
    console.log(`${key}: ${car[key]}`)
};

//Zadanie 5

const car = {
    name: 'Mazda',
    color: 'red',
    topSpeed: 203,
    age: 10,
    dims: {
        len: 4.8,
        width: 2
    }
}

console.log(car.dims.len);
console.log(car.dims.width);

for(let item in car.dims){
    console.log(``);
}


//Zadanie 6

const obj = {

}
obj.what = "i'm object"
obj.hello = () => {
    console.log("Hello");
}
console.log(obj.what);
obj.hello;

