let flipbutton = document.querySelector("#flipbutton");

let resetbutton = document.querySelector("#resetbutton");

let answerspace = document.querySelector("#answerdiv");
answerspace.innerHTML = "";

let divpic = document.querySelector("#picdiv");

let guessSpace = document.querySelector("#guessdiv");
guessSpace.innerHTML = "";
//Selects both radio buttons
let ele = document.getElementsByName('guessinput');

//Applies guessCoin function on click
flipbutton.addEventListener("click", guessCoin);


function guessCoin() {
    //Set to false because radio buttons star as unchecked
    let userEntry = false;
    let choice = "";
    //Loops through radio buttons
    for (i = 0; i < ele.length; i++) {
    //if the radio button is checked, then change userEntry to true
      if (ele[i].checked) {
        userEntry = true;
        //set the user's choice to be the radio value "true" or "false"
        choice = ele[i].id;
      }
    }

    //if the user selects false
    if (userEntry === false) {
    //add text to answer div if they do not enter anything
      answerspace.innerHTML += "<p>Please make a selection</p>";
    } else {
    //if there is an entry, display the value of the radio button
      guessSpace.innerHTML += `<p>You chose ${choice}</p>`;
    }
  
    //Create random number between 0 and 1
    let num0to1 = Math.floor(Math.random() * 2);
    //variable for the actual randomly generated answer
    let answerFlip = "";
    //if number is 0, coin is "tails"
    if (num0to1 === 0) {
      answerFlip = "tails";
    } else {
    //if number is 1, then coin is "heads"
      answerFlip = "heads";
    }

  //Compare the user's selection to the randomly generated answer
    if (choice === answerFlip) {
    //if they match, then the user is correct and background color turns green
      divpic.style.backgroundColor = "#07da63";
      answerspace.innerHTML += "You got it right!"
    } else {
    //otherwise, the background color turns red and the user is wrong
      divpic.style.backgroundColor = "red";
      answerspace.innerHTML += "You got it wrong!"
    }
  
  }
  


//created a reset button so that everything can clear to restart the game
//added an event listener to the reset button on click
  resetbutton.addEventListener("click", resetChoice);

  function resetChoice() {
    for (i = 0; i < ele.length; i++) {
    //set all elements to be clear or empty
      ele[i].checked = false;
      answerspace.innerHTML = "";
      divpic.style.backgroundColor = "";
      guessSpace.innerHTML = "";
    }
  }
  
  



// let heads = 0;
// let tails = 0;

// //made function to disable buttonn for a few seconds
// function disableButton(){

// }

// //multiply times 2 because you want number between 0 and 2 --> Math.floor(Math.random()*2)
// //now we need background to turn green and say congrats
// //radio button input to compare to randomized inside the function
// flipbutton.addEventListener("click", () => {
//     let num0to2 = Math.floor(Math.random()*2);
//     if(num0to2 == 0){
//         head++;
//     } else {
       
//     disableButton();
// });


// //maka variables for each one
// const headsguess = document.getElementByQuerySelector("#heads");
// const tailsguess = document.getElementByQuerySelector("#tails");
