import logo from './logo.svg';
import './App.css';
import Images from "./components/Images";

const image = [
  "https://i0.wp.com/wrpsa.com/wp-content/uploads/2021/08/rock.png?resize=413%2C386&ssl=1",
  "https://i0.wp.com/wrpsa.com/wp-content/uploads/2021/08/paper.png?resize=413%2C386&ssl=1",
  "https://i0.wp.com/wrpsa.com/wp-content/uploads/2021/08/scissors.png?resize=413%2C386&ssl=1"
];

export default function App() {
  const [compScore, setCompScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [choice, setChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [message, setMessage] = useState("");
  const [compImage, setCompImage] = useState("");

  const randomGenerator = () => {
    let randNum = Math.floor(Math.random() * 3);
    console.log(randNum);
    if (randNum === 0) {
      return "paper";
    } else if (randNum === 1) {
      return "rock";
    } else if (randNum === 2) {
      return "scissors";
    }
  };

  const reset = () => {
    setCompScore(0);
    setUserScore(0);
    setChoice("");
    setCompChoice("");
    setMessage("");
  };

  let computerGuess = randomGenerator();

  function selectionImage() {
    if (computerGuess === "rock") {
      setCompImage(image[0]);
    } else if (computerGuess === "paper") {
      setCompImage(image[1]);
    } else if (computerGuess === "scissors") {
      setCompImage(image[2]);
    }
  }

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
       
    </div>
  );
}

export default App;
