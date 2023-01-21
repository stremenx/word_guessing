//CSS
import './App.css';

//React
import { useCallback, useEffect, useState, } from 'react';

//Data
import { wordsList } from "./data/words";
 
//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

//Const
const stages = [
  {id: 1, name: "start" },
  {id: 2, name: "game" },
  {id: 3, name: "end" },
];


function App() {
 const [gameStage, setGameStage] = useState(stages[0].name);
 const [words] = useState(wordsList);

 const [pickWord, setPickWord] = useState("");
 const [pickedCategories, setPickedCategory] = useState("");
 const [letters, setLetters] = useState([]);

const pickWordAndCategory = () => {
  //Pick word and pick category
  const categories = Object.keys(words);
  const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] 

  //Pick a random word
  const word = words[category][Math.floor(Math.random() * words[category].length)]

  return {word, category}
};


//start the secret word game
const startGame = () => {

  //Pick word and pick category
  const {word, category} = pickWordAndCategory();

  //create an array of letters
  let wordLetters = word.split("")
  wordLetters = wordLetters.map((l) => l.toLowerCase());

  console.log(word, category)
  console.log(wordLetters)

  // fill states
  setPickWord(word);
  setPickedCategory(category);
  setLetters(letters);

  setGameStage(stages[1].name);
};

//process the letter input
const verifyLetter = () => {
  setGameStage(stages[2].name);
}

// restarts the game
const retry = () => {
  setGameStage(stages[0].name);
}

  return (
    <div className="App">
      <header className="App-header">
        {gameStage === "start" && <StartScreen startGame={startGame}/>}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
        {gameStage === "end" && <GameOver retry={retry} />}
      </header>
    </div>
  );
}

export default App;
