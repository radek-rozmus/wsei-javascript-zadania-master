//Radosław Rozmus 12452 - Konstruktory i prototype

//Zadanie 1
function Person(name, surname, age, country, city, language){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

    this.changeAge = age => (this.age = age);
    this.changeCity = city => (this.city = city);
}

const user = new Person('Radosław', 'Rozmus', 20, 'Poland', 'Chrzanów', 'polish');
console.log(user);

//Zadanie 2

function Calculator(){
    this.result = null;
    this.errors = [];
    this. story = [];
    this.operation = null;
    this.a = null;
    this.b = null;

    this.calculation = (operation) => {
        const calculation = operation.split('');
        console.log(calculation);
        this.a = calculation[0];
        this.b = calculation[2];
        this.operation= calculation[1];

        switch(this.operation){
            case '+':
                this.result=this.a+this.b;
                break;
            case '-':
                this.result=this.a-this.b;
                break;
            case '*':
                this.result=this.a*this.b;
                break;
            case '/':
                this.result=this.a/this.b;
                break;
        }
        
        this.story.push({o: operation, r: this.result}) 
    }


}

//Zadanie 3

function Game(){

    this.changeNumber = function(){               
        number = Math.floor(Math.random()*10+1)
        console.log(number);
    }

    this.checkNumber = function(){
        if (number>5){
            console.log("koniec");
            process.exit()
        }
    }
}

Game.prototype.number;

let player1 = new Game();
let player2 = new Game();


while(true){
    player1.changeNumber();
    player2.checkNumber();}