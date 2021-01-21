//Radosław Rozmus 12452 - DOM-elementy

//Zadanie 1

returnTab = (element) =>{
  
    let tab = [];
    
    element.forEach((e) => {
          tab.push(e.tagName);
          })
  
  return tab;
}
console.log(returnTab(document.getElementById("myDiv").querySelectorAll('.more-divs')));

//Zadanie 2

displayElements = (e) =>{
  console.log(e.outerHTML); //1
  console.log(e.innerHTML); //2
  
  str = "";
  e.classList.forEach((e) => {
    str+=e;
    })
  console.log(str); //3
  
  tab = [];
  e.classList.forEach((e) => {
    tab.push(e);
    })
  console.log(tab); //4
  console.log(e.dataset); //5
  
}

displayElements(document.querySelector(".short-list"));

//Zadanie 3

addAndSub = () =>{
 
    let dataSet = document.getElementById("datasetCheck");

    let add = parseInt(dataSet.getAttribute('data-numberOne'), 10) 
              + parseInt(dataSet.getAttribute('data-numberTwo'), 10)
              + parseInt(dataSet.getAttribute('data-number-three'), 10);
    
    let sub = dataSet.getAttribute('data-numberOne') 
              - dataSet.getAttribute('data-numberTwo')
              - dataSet.getAttribute('data-number-three');
    
    console.log("Dodawanie: " + add + " " + "Odejmowanie: " + sub)
  }
  
  addAndSub();
  
//zadanie 4

let span = document.getElementById("spanText");
span.innerText = "dowolny";

//zadanie 5

let span = document.getElementById("spanText");
span.classList.toggle('dowolna');

//Zadanie 6

classFun = (list) =>{
  
  list.forEach((e) => {
          console.log(e);
          })
  
  let str = "";
  
  list.forEach((e) => {
          str +=  e + " + ";
          })
  console.log(str.slice(0, str.length-3));
   
  let tab = []; 
  
  list.forEach((e) => {
          tab.push(e);
          })
  
  for(let i=0; i<tab.length; i++) {
          list.remove(tab[i]);
          }
  console.log("Usunieto wszystkie klasy");
}
classFun(document.getElementById("classes").classList);

//Zadanie 7

setAttribute = (element) =>{
    
    element.forEach((e) => {
          if(e.hasAttribute("data-text")===false)
            e.setAttribute('data-text', "text");
      
            console.log(e.outerHTML);
          })  
}
  
setAttribute(document.getElementById("longList").querySelectorAll('li'));

//Zadanie 8

stringToObj = (string) =>{
  let str = {
    newClass: string
  }
  return str;
}

setClass = (string) =>{
  let str = string.newClass;
  document.getElementById("myDiv").classList.add(str);
  console.log( document.getElementById("myDiv").outerHTML);
}

setClass(stringToObj("NowaKlasa"));

//Zadanie 9

addClass = (random) =>{  
    let divNumbers = document.getElementById("numbers");
   
    if(random%2===0)
        divNumbers.classList.add("even");
    else
        divNumbers.classList.add("odd");
  }
  
  let random = Math.round(Math.random() * (10 - 0) + 0 );
  addClass(random);

//Zadanie 10 

returnTab = (element) =>{
    let elem = element.querySelectorAll('li');
    
    let tab = [];
    
    elem.forEach((e) => {
          tab.push(e.innerText);
          })
    
    return tab;
  }
  
  console.log(returnTab(document.getElementById("longList")));

//Zadanie 11

changeData = (element) =>{
  
    element.forEach((e) => {
        e.setAttribute("data-text", e.innerText);
        e.innerText = Math.round(Math.random() * (10 - 0) + 0 );;
        console.log(e.innerHTML);
        console.log(e.outerHTML);
        })
}
changeData(document.getElementById("longList").querySelectorAll('li'));