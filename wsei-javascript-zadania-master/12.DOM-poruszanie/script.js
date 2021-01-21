//Radosław Rozmus 12452 - DOM-poruszanie

//Zadanie 1

console.log(document.getElementById('buz').parentNode);
console.log(document.getElementById('baz').previousElementSibling);
console.log(document.getElementById('foo').children);
console.log(document.getElementById('foo').parentNode);
console.log(document.getElementById('foo').firstElementChild);

var elem = document.getElementById('foo').children;
console.log(elem[Math.floor(elem.length/2)]);

//Zadanie 2

function listen(id){
    document.getElementById(id).addEventListener("click", (e) => {
        
        console.log(e.target.querySelector('div').innerText);
        
    })
}

listen("ex2");

//Zadanie 3

const ex3 = document.querySelectorAll("#ex3 button");
ex3.forEach(btn => {
    btn.addEventListener("click", function(){
        if(btn.nextElementSibling.style.display === "none")
            btn.nextElementSibling.style.display = "inline";
        else btn. nextElementSibling.style.display = "none";    
    })
})

//Zadanie 4
const changeParentsColor=()=>{    
    const ex3 = document.querySelectorAll("#ex3 button");

    const changeColor =(elem)=> {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        elem.parentElement.style.backgroundColor = randomColor;
    }

    ex3.forEach(btn => {
        btn.addEventListener("click", function(){
            if(btn.parentElement.style.display === "none"){
                btn.parentElement.style.display = "inline";
                changeColor(this)}
            else
                changeColor(this)
        })
    })
}
changeParentsColor()

//Zadanie 5
document.querySelectorAll('#ex5 div').forEach((div)=>{
    console.log("XD2");  
    div.addEventListener('mouseover', function(){
      let color = this.style.backgroundColor;
      //1. 
      //let elem = div.parentElement.querySelectorAll('li:first-of-type');
      
      //2. 
      //let elem = div.parentElement.querySelectorAll('li:last-of-type');
      
      //3. 
      //let elem = div.parentElement.querySelectorAll('li:nth-of-type(even)');
      
      //4. 
      //let elem = div.parentElement.querySelectorAll('li');
      
      //5. 
      //let elem = div.parentElement.querySelectorAll('ul');
          
      elem.forEach((e) => {
        e.style.backgroundColor = color;
        })         
    })
})
//Zadanie 6

var elem = document.getElementById('ex6')

var firstElem = elem.firstElementChild.firstElementChild.firstElementChild;

var secondElem = elem.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

var thirdElem = elem.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;

console.log(firstElem, secondElem, thirdElem);