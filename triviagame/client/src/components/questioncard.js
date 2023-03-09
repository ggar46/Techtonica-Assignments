import { useState } from "react";
import "./questioncard.css";

const QuestionCard = (props) => {
    /*
    create state, onClick function, function that passes button data, and
    that data changes the state to true or false as a string, and then we
    console.log the string with true/false*/
   
  const [answer, changeAnswer] = useState("");
  
const handleAnswer = (buttonAnswer) => {
  (buttonAnswer === props.question.correct_answer) ?  changeAnswer("True") : changeAnswer("False");
}



    return (
        <div className={answer === "" ? "no-color": ((answer === "True") ? "green-div": "red-div")}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
		<button onClick={() => handleAnswer("True")}>True</button>
		<button onClick={() => handleAnswer("False")}>False</button>
        </div>
        {answer === "" ? <p></p>:((answer === "True") ? <p>Correct</p> : <p>Incorrect</p>)}
      </div>
    );
  };

export default QuestionCard;