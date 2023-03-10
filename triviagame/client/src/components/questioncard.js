import { useState } from "react";
import "./questioncard.css";


const QuestionCard = (props) => {
   
  const [answer, changeAnswer] = useState("");
  const [status, changeStatus] = useState(false);

  
const handleAnswer = (buttonAnswer) => {
  if(buttonAnswer === props.question.correct_answer) {
    changeAnswer("True");
    changeStatus(true);
    let count = 1;
    console.log(count);
    props.func(count);
  
  } else {
    changeAnswer("False");
    changeStatus(true);
    let count = 0;
    console.log(count);
  }
}


    return (
        <div className={answer === "" ? "no-color": ((answer === "True") ? "green-div": "red-div")}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
		<button disabled={status} onClick={() => handleAnswer("True")}>True</button>
		<button disabled={status} onClick={() => handleAnswer("False")}>False</button>
        </div>
        {/* {answer === "" ? <p></p>:((answer === "True") ? <p>Correct</p> : <p>Incorrect</p>)} */}
      </div>
    );
  };

export default QuestionCard;

/*
- now we want the count to count all of them and keep adding up instead of just counting one
- or we can add to map?
- we need to get the count from all of the cards, the question card is creating individual cards
that are seen as a group not here, but in the game.js, meaning that I cannot iterate
through all the cards here, but in game.js
- Therefore, I need to add the score by adding up all the points in questioncard.js
- Maybe, I can
*/