//Radosław Rozmus 12452 - DOM-eventy

//Zadanie 1

var btn1 = document.getElementById("test-event");
btn1.addEventListener("click", function(event){
    console.log(event)
})
window.addEventListener("mousemove",function (event){console.log(event)});
btn1.addEventListener("mouseenter",function (event){console.log(event)});
window.addEventListener("keydown",function (event){console.log(event)});
window.addEventListener("scroll",function (event){console.log(event)});
document.getElementById("input-test").addEventListener("change", function (event){console.log(event)})

//Zadanie 2

const button = document.getElementById("ex2");
const spanEx2 = document.getElementById("span-ex2");

button.addEventListener('click', function(){
  const buttonText = button.getAttribute("data-text");
  spanEx2.innerText=buttonText;
})

//Zadanie 3

const square = document.getElementById("ex3");

overMouse = () => {
    square.style.backgroundColor = "blue";
}
square.onmouseover = overMouse;

outMouse = () => {
    square.style.backgroundColor = "red";
}
square.onmouseout = outMouse;

//Zadanie 4

const input = document.querySelector('#input-test');
const alert = document.createElement('div');
alert.textContent = "You can't write a number";

const validate = (e) => {
    if (e.target.value.match(/\d/g)){
        input.parentElement.appendChild(alert);
    } else{
        alert.remove();   
    }
};

input.addEventListener('input', validate);

//Zadanie 5 

let counter =  0;

function counterFunction(){
    if(counter >=10){
        document.getElementById("ex5-button").removeEventListener("click", counterFunction);
    }else {
        counter++;
        this.nextElementSibling.innerHTML = counter;
    }
}
document.getElementById("ex5-button").addEventListener("click", counterFunction);

//Zadanie 6

window.addEventListener("scroll",function(){
  if(window.scrollY > 200)
    document.body.style.backgroundColor = "red";
  else
    document.body.style.backgroundColor = "white";
})

//Zadanie 7

function calculator() {
  const buttons = document.querySelectorAll(
    "#calculator > div:nth-child(4) > button"
  );
  const input = document.querySelector("#calculator > input:first-child");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      if (i + 1 === 10) {
        input.value += 0;
      } else {
        input.value += i + 1;
      }
    });
  }
  const specialButtons = document.querySelectorAll(
    "#calculator > div:nth-child(5) > button"
  );

  for (let i = 0; i < specialButtons.length; i++) {
    specialButtons[i].addEventListener("click", function () {
      if (specialButtons[i].textContent.includes("+")) {
        input.value += "+";
      } else if (specialButtons[i].textContent.includes("-")) {
        input.value += "-";
      } else if (specialButtons[i].textContent.includes("*")) {
        input.value += "*";
      } else {
        input.value += "/";
      }
    });
  }
  
  input.addEventListener("keydown", function(event) {
    if(event.which===13)
      input.value = eval(input.value);
})
}

calculator();
