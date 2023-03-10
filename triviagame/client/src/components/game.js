import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";
import "./game.css";

const Game = () => {

    const [questions, setQuestions] = useState([]);
    const [count, setCount] = useState(0);
    const [percent, setPercent] = useState("");
    const [numDone, setnumDone] =  useState(0);

    const loadData = () => {
        fetch('http://localhost:5000/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    const useChildData = (answer) => {
        if(answer === 0){
            setCount(count+0);
            setnumDone(numDone+1);
        } else if (answer===1){
            setCount(count+1);
            setnumDone(numDone+1);
        }
        if(answer !== ""){
            let percentVal = (count)/questions.length*100;
            setPercent(percentVal);
        }
    }
   
    return (
        <div className="Container">
            {numDone ===5 && percent <= 60 ? <p className="score">Your score is {percent}%! Try again!</p> : <p></p>}
        {numDone ===5 && percent > 70 && percent < 90 ? <p className="score">Your score is {percent}%! Great job!!</p> : <p></p>}
        {numDone ===5 && percent >= 90 && percent < 100 ? <p className="score">Your score is {percent}%! Amazing!!</p> : <p></p>}
        {numDone ===5 && percent === 100 ? <p className="score">Your score is {percent}%! Perfect!!!</p> : <p></p>}
            <div className='question-count'>
                <p>Score: {count}/{questions.length}</p>
            </div>

            {questions.map((question, index) => {
                return <QuestionCard key={index} question={question} func={useChildData}/>
            })}

            
        </div>
    )
}

export default Game;