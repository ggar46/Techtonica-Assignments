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
    props.func(count);
    console.log(count);
  }
}


    return (
        <div className={answer === "" ? "no-color": ((answer === "True") ? "green-div": "red-div")}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
		<button  disabled={status} onClick={() => handleAnswer("True")}>True</button>
		<button  disabled={status} onClick={() => handleAnswer("False")}>False</button>
        </div>
        {answer === "" ? <p></p>:((answer === "True") ? <p className="answerP">Correct! This is {props.question.correct_answer}</p> : <p className="answerP">Incorrect! This is {props.question.correct_answer}</p>)}
      </div>
    );
  };

export default QuestionCard;