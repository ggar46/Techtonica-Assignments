let flipbutton = document.querySelector("#flipbutton");
let resetbutton = document.querySelector("#resetbutton");
document.getElementById("picdiv").style.backgroundColor = "blue";


let heads = 0;
let tails = 0;

//made function to disable buttonn for a few seconds
function disableButton(){

}

//multiply times 2 because you want number between 0 and 2 --> Math.floor(Math.random()*2)
//now we need background to turn green and say congrats
//radio button input to compare to randomized inside the function
// flipbutton.addEventListener("click", () => {
//     let num0to2 = Math.floor(Math.random()*2);
//     if(num0to2 == 0){
//         head++;
//     } else {
       
//     disableButton();
// });


//maka variables for each one
const headsguess = document.getElementByQuerySelector("#heads");
const tailsguess = document.getElementByQuerySelector("#tails");
