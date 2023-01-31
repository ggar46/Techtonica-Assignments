//CHANGE TITLE COLOR
const title = document.querySelector('h1');

function changeColor() {
    if (title.style.color !== "purple"){
    title.style.color = "purple";
    } else if (title.style.color !== "red"){
        title.style.color = "red";
    }
}

title.addEventListener("click", changeColor);

//CHANGE LINK COLORS
function myFunction() {
    let section = document.querySelectorAll('.link');
    section.forEach(element => element.style.color = "yellow");
}


// ADDED LIST ITEM
// let newListItem = document.createElement('li');
// let word1 = newListItem.textContent = '1 stick of butter';
// document.querySelector('ul').appendChild(newListItem);
// let eachOne = document.querySelector('ul');

//INGREDIENTS ARRAY
const arrayFood = ["8 ears of corn", "1 can of lechera", "sugar (to taste)", "8 eggs", "2 1/2 cups flour", "2 tbsp baking powder", "vanilla", "1 cup of Milk"]
//ADDED CHECKBOXES
const myDiv = document.getElementById("myDiv");

function foodCheckBox(array){
    for(let i=0; i < array.length; i++){
        let checkbox = document.createElement("input");
        ///checkbox.style.display = block;
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

let label = document.createElement("label");

label.htmlFor = "id";

label.appendChild(document.createTextNode(`${array[i]}`));

myDiv.appendChild(checkbox);
myDiv.appendChild(label);
    }
}

foodCheckBox(arrayFood);


// REMOVED MANUAL LIST
const ul = document.querySelector("ul");
ul.remove;