//Radosław Rozmus 12452 - DOM-wyszukiwanie

//Zadanie 1

const lists = document.querySelectorAll('.list');

console.log(lists);

//Zadanie 2

function SearchTag(tag){
    const tags = document.querySelectorAll(tag);
    console.log(tags);
}

SearchTag("li");

//Zadanie 3

var list = document.getElementById("list"); 

console.log(list);

//Zadanie 4

function showTags(selector){
    console.log(selector);
}
                   
showTags(document.querySelectorAll('li'));
showTags(document.querySelectorAll('ul'));
showTags(document.querySelectorAll('span'));
showTags(document.querySelectorAll('div.list span'));
showTags(document.querySelectorAll('div#spans span'));

