//Radosław Rozmus 12452 - DOM-Tworzenie elementów

//Zadanie 1

const el = document.createElement("div");
el.innerText = "To jest nowy element";
const div = document.getElementById('root');
div.appendChild(el);

//Zadanie 2

const ul = document.createElement("ul");
ul.id = "owoce";
div.appendChild(ul);

const pear = document.createElement("li");
pear.classList.add("owoc");
pear.innerText = "gruszka";

const apple = document.createElement("li");
apple.classList.add("owoc");
apple.innerText = "jabłko";

const pinapple = document.createElement("li");
pinapple.classList.add("owoc");
pinapple.innerText = "pinapple";

const watermelon = document.createElement("li");
watermelon.classList.add("owoc");
watermelon.innerText = "arbuz";

const banana = document.createElement("li");
banana.classList.add("owoc");
banana.innerText = "banan";

const orange = document.createElement("li");
orange.classList.add("owoc");
orange.innerText = "pomarańcz";

ul.appendChild(pear);
ul.appendChild(apple);
ul.appendChild(pinapple);
ul.appendChild(watermelon);
ul.appendChild(banana);
ul.appendChild(orange);

//Zadanie 3

ul.removeChild(pear);
ul.removeChild(pinapple);
ul.removeChild(banana);

//Zadanie 4
const removeButton = () => {
div.removeChild(button);
console.log("usunięto")
}
const button = document.createElement("button");
button.innerText = "Usuń";
button.id = "button";
button.onclick = removeButton;
div.appendChild(button);

//Zadanie 5

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const howManyDivsToGenerate = randomInt(0, 101);

for(let i = 1; i<=howManyDivsToGenerate; i++){
    const generatedDiv = document.createElement("div");
    generatedDiv.innerText = `to jest div numer ${i}`;
    div.appendChild(generatedDiv);
}

//Zadanie 6

const object = {
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}

const keys = Object.keys(object);
const values = Object.values(object);

const div1 = document.createElement("div");
div1.id = keys[0];
div1.innerText = values[0];
div.appendChild(div1);

const span1 = document.createElement("span");
span1.id = keys[1];
span1.innerText = values[1];
div.appendChild(span1);

const div2 = document.createElement("div");
div2.id = keys[2];
div.appendChild(div2);

const div3 = document.createElement("div");
const keys1 = Object.keys(object.div2);
const values1 = Object.values(object.div2);
console.log(keys1);
console.log(keys1);
div3.id = keys1[0];
div3.innerText = values1[0];
div2.appendChild(div3);

const span2 = document.createElement("span");
span2.id = keys[3];
span2.innerText = values[3];
div.appendChild(span2);

//Zadanie 7

let elementsUL1 = 6;

const UL1toUL2 = () => {
    const copy = ul1.lastChild;
    ul1.removeChild(ul1.lastChild)
    ul2.appendChild(copy)
    elementsUL1--;
    if(elementsUL1 <= 0){
        button1.disabled = true;
    }
    button2.disabled = false;
    }

const UL2toUL1 = () => {
    const copy = ul2.lastChild;
    ul2.removeChild(ul2.lastChild)
    ul1.appendChild(copy)
    elementsUL1++;
    if(elementsUL1 >= 6){
        button2.disabled = true;
    }
    button1.disabled = false;
    }


const ul1 = document.createElement("ul");
ul1.id = "Miasta";
div.appendChild(ul1);

const krakow = document.createElement("li");
krakow.innerText = "Kraków";

const warszawa = document.createElement("li");
warszawa.innerText = "Warszawa";

const poznan = document.createElement("li");
poznan.innerText = "Poznań";

const lodz = document.createElement("li");
lodz.innerText = "Łódź";

const lublin = document.createElement("li");
lublin.innerText = "Lublin";

const gdansk = document.createElement("li");
gdansk.innerText = "Gdańsk";

ul1.appendChild(krakow);
ul1.appendChild(warszawa);
ul1.appendChild(poznan);
ul1.appendChild(lodz);
ul1.appendChild(lublin);
ul1.appendChild(gdansk);

const button1 = document.createElement("button");
button1.innerText = "Przenieś z listy 1 do 2";
button1.id = "button1";
button1.onclick = UL1toUL2;
div.appendChild(button1);



const ul2 = document.createElement("ul");
ul2.id = "owoce";
div.appendChild(ul2);

const button2 = document.createElement("button");
button2.innerText = "Przenieś z listy 2 do 1";
button2.id = "button2";
button2.onclick = UL2toUL1;
div.appendChild(button2);

//Zadanie 8

const form = document.createElement("form");
form.id = "form";
div.appendChild(form);

const type = document.createElement("input");
type.type = "text";

const text = document.createElement("input");
text.type = "text";

const color = document.createElement("input");
color.type = "text";

const repeat = document.createElement("input");
repeat.type = "number";

form.appendChild(type);
form.appendChild(text);
form.appendChild(color);
form.appendChild(repeat);

type.value = "";
text.value = "";
color.value = "";
repeat.value = "";

const resultOfQuery = document.createElement("div");

const createButton = document.createElement("button");
createButton.innerText = "Stwórz";
createButton.id = "c_button";
createButton.onclick = () => {
    for(let i = 0; i < repeat.value; i++){
        const element = document.createElement(type.value);
        element.innerText = text.value;
        element.style.color = color.value;
        resultOfQuery.appendChild(element);
    }
type.value = "";
text.value = "";
color.value = "";
repeat.value = "";
}
div.appendChild(createButton);
div.appendChild(resultOfQuery);

// br
const br = document.createElement('br');
div.appendChild(br);
const hr = document.createElement('hr');
div.appendChild(hr);

//Zadanie 9

const formTab = document.createElement("form");
div.appendChild(formTab);

const nameTab = document.createElement("input");
nameTab.type = "text";

const surnameTab = document.createElement("input");
surnameTab.type = "text";

const ageTab = document.createElement("input");
ageTab.type = "number";

const kidsTab = document.createElement("input");
kidsTab.type = "number";

nameTab.value = "";
surnameTab.value = "";
ageTab.value = "";
kidsTab.value = "";

formTab.appendChild(surnameTab);
formTab.appendChild(nameTab);
formTab.appendChild(ageTab);
formTab.appendChild(kidsTab);

let tabCount = 0;

const addRowButton = document.createElement("button");
addRowButton.innerText = "Dodaj";
addRowButton.id = "ar_button";
addRowButton.onclick = () => {
    if(tabCount < 1){
        addTable();
        addRow(nameTab.value, surnameTab.value, ageTab.value, kidsTab.value);
    }else{
        addRow(nameTab.value, surnameTab.value, ageTab.value, kidsTab.value); 
    }
nameTab.value = "";
surnameTab.value = "";
ageTab.value = "";
kidsTab.value = "";
}
div.appendChild(addRowButton);



function addRow(nameT, surnameT, ageT, kidsT) {

    const table = document.getElementById("myTable");
    if(table) tabCount += 1;
 
    const rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
 
    const removeRowButton = document.createElement("button");
    removeRowButton.innerText = "Usuń";
    removeRowButton.id = "rr_button";
    removeRowButton.onclick = () => {
        tabCount -= 1;
        if(tabCount<1){
            table.parentElement.removeChild(table);
        }
        else{
        console.log(removeRowButton.parentElement.parentElement.parentElement);
        removeRowButton.parentElement.parentElement.parentElement.removeChild(removeRowButton.parentElement.parentElement);
    }
}

    row.insertCell(0).innerHTML= rowCount;
    row.insertCell(1).innerHTML= nameT;
    row.insertCell(1).innerHTML= surnameT;
    row.insertCell(3).innerHTML= ageT;
    row.insertCell(4).innerHTML= kidsT;
    row.insertCell(5).appendChild(removeRowButton);
}

 
function addTable() {
    let table = document.createElement("table");
    table.border = '1px';
    table.id = "myTable";
    
    let tableHeader = document.createElement("thead");
    table.appendChild(tableHeader);

       let tr = document.createElement('tr');
       tableHeader.appendChild(tr);
        for (var j=0; j<6; j++){
            var td = document.createElement('td');
            switch(j){
                case 0:
                    td.appendChild(document.createTextNode(""));
                    tr.appendChild(td);
                    break;
                case 1:
                    td.appendChild(document.createTextNode("Imie"));
                    tr.appendChild(td);
                    break;
                case 2:
                    td.appendChild(document.createTextNode("Nazwisko"));
                    tr.appendChild(td);
                    break;
                case 3:
                    td.appendChild(document.createTextNode("Wiek"));
                    tr.appendChild(td);
                    break;
                case 4:
                    td.appendChild(document.createTextNode("Ilość dzieci"));
                    tr.appendChild(td);
                    break;
                case 5:
                    td.appendChild(document.createTextNode(""));
                    tr.appendChild(td);
                    break;
        }
}
    div.appendChild(table); 
}

//Zadanie 10


//Zadanie 11

function howManyDivsFromString(string){
    const matches = string.match(/\d+/g); 
    console.log(matches);
    let result = 1;
    matches.forEach(element => {
        result = result * element;
    });
    console.log(result);
    for(let i = 0; i < result; i++){
        const element = document.createElement("div");
        element.innerText = string;
        div.appendChild(element);
    }

}

//Zadanie 12
let obj = {
    string: '',
}

function stringToObject(userString){
    obj.string = userString;
}

function isAla (){
    let iterations = 0;
    while(this.string.includes("Ala"))
    {
        if(this.string.includes("Ala")){
            this.string = this.string.replace("Ala", "Ola");
        }
        iterations++;
    }
    if(iterations === 0){
        const message = document.createElement("div");
        message.innerText = "Słowo Ala nie występuje w tekście.";
        div.appendChild(message);
    }
}

obj.isAla = isAla;

//Zadanie 13

function lengthOfStrings(stringTab){
    const tab = stringTab.map(x => {
        return x.length;
    });
    return tab;
}
function tabSum(intTab){
    let sum = 0;
    intTab.forEach(element => {
        sum += element;
    });
    return sum;
}

function tabAverage(intTab){
    return tabSum(intTab) / intTab.length;
}

//Zadanie 14

let user = {
    name: '',
    surname: '',
    age: ''
}

const userN = document.createElement("div");
const userS = document.createElement("div");
const userA = document.createElement("div");
userN.innerText = user.name;
userS.innerText = user.surname;
userA.innerText = user.age;
div.appendChild(userN);
div.appendChild(userS);
div.appendChild(userA);

let buttonActive = false;

    const resetButton = document.createElement("button");
        resetButton.innerText = "Reset";
        resetButton.id = "r_button";
        resetButton.onclick = () => {
        user.name = '';
        user.surname = '';
        user.age = '';
    
        userN.innerText = user.name;
        userS.innerText = user.surname;
        userA.innerText = user.age;

        if(buttonActive === true) {
            resetButton.parentElement.removeChild(resetButton);    
            buttonActive = false;
        }
    }

const changeUserData = (newName, newSurname, newAge) => {
    user.name = newName;
    user.surname = newSurname;
    user.age = newAge;
    user.nameLength = user.name.length;
    user.surnameLength = user.surname.length;
    
    userN.innerText = user.name;
    userS.innerText = user.surname;
    userA.innerText = user.age;

    if(user.nameLength > 5 || user.surnameLength > 5){
        if(buttonActive === false) {
            div.appendChild(resetButton);
            buttonActive = true;
        }
    }
    else{
        if(buttonActive === true) {
            resetButton.parentElement.removeChild(resetButton);    
            buttonActive = false;
        }
    }
}