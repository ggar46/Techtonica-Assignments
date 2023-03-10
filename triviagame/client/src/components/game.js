import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = () => {

    const [questions, setQuestions] = useState([]);
    const [count, setCount] = useState(0);

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
        if(!answer){
            setCount(count+0);
        } else if (answer===1){
            setCount(count+1);
        }
    }

    return (
        <div className="Container">
            <div className='question-count'>
                <span>Question 1</span>/{questions.length} 
                <p>{count}/{questions.length} correct</p>
            </div>

            {questions.map((question, index) => {
                return <QuestionCard key={index} question={question} func={useChildData}/>
            })}
        </div>
    )

}

export default Game;
