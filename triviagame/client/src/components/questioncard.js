import { useState } from "react";
import "./questioncard.css";


const QuestionCard = (props) => {
    /*
    create state, onClick function, function that passes button data, and
    that data changes the state to true or false as a string, and then we
    console.log the string with true/false*/
   
  const [answer, changeAnswer] = useState("");
  const [status, changeStatus] = useState(false);
  //let [count, setCount] = useState(0);
  
const handleAnswer = (buttonAnswer) => {
  if(buttonAnswer === props.question.correct_answer) {
    changeAnswer("True");
    changeStatus(true);
    //setCount(count+1);
  } else {
    changeAnswer("False");
    changeStatus(true);
  }
}



    return (
        <div className={answer === "" ? "no-color": ((answer === "True") ? "green-div": "red-div")}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
		<button disabled={status} onClick={() => handleAnswer("True")}>True</button>
		<button disabled={status} onClick={() => handleAnswer("False")}>False</button>
        </div>
        {/* {count} */}
        {/* {answer === "" ? <p></p>:((answer === "True") ? <p>Correct</p> : <p>Incorrect</p>)} */}
      </div>
    );
  };

export default QuestionCard;

/*
- now we want the count to count all of them and keep adding up instead of just counting one
- or we can add to map?
*/