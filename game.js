document.body.style.backgroundColor = "#3540c2";

let flipbutton = document.querySelector("#flipbutton");
let resetbutton = document.querySelector("#resetbutton");

let answerspace = document.querySelector("#answerdiv");
answerspace.innerHTML = "";

let divpic = document.querySelector("#picdiv");
let divpic2 = document.querySelector("#picdiv2");

let guessSpace = document.querySelector("#guessdiv");
guessSpace.innerHTML = "";
//Selects both radio buttons
let ele = document.getElementsByName('guessinput');


//Applies guessCoin function on click
flipbutton.addEventListener("click", guessCoin);

picdiv2.style.display = "none";


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
      guessSpace.innerHTML += `<p>You selected ${choice}</p>`;
    }
  

    //Create random number between 0 and 1
    let num0to1 = Math.floor(Math.random() * 2);
    //variable for the actual randomly generated answer
    let answerFlip = "";
    //if number is 0, coin is "tails"
    if (num0to1 === 0) {
      answerFlip = "tails";
      picdiv.style.display = "none";
      picdiv2.style.display = "block";
    } else {
    //if number is 1, then coin is "heads"
      answerFlip = "heads";
    }


  //Compare the user's selection to the randomly generated answer
    if (choice === answerFlip) {
    //if they match, then the user is correct and background color turns green
      answerspace.style.backgroundColor = "#23F0C7";
      answerspace.innerHTML += "<p>Correct! Great job!</p>";
    } else {
    //otherwise, the background color turns red and the user is wrong
      answerspace.style.backgroundColor = "#E84855";
      answerspace.innerHTML += "<p>Incorrect, please try again</p>";
    }
    flipbutton.disabled = true;
  }
  


//created a reset button so that everything can clear to restart the game
//added an event listener to the reset button on click
  resetbutton.addEventListener("click", resetChoice);

  function resetChoice() {
    for (i = 0; i < ele.length; i++) {
    //set all elements to be clear or empty
      ele[i].checked = false;
      answerspace.innerHTML = "";
      answerspace.style.backgroundColor = "";
      guessSpace.innerHTML = "";
      picdiv2.style.display = "none";
      picdiv.style.display = "block";
      flipbutton.disabled = false;
    }
  }
