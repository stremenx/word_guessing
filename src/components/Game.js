import { useState, useRef } from 'react';
import './Game.css';

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategories,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  
  const [letter, setLetter] = useState("");
  const letterImputRef = useRef(null)


  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterImputRef.current.focus();
  };

  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className='tip'>
        Dica sobre a palavra: 
        <span> {pickedCategories}</span>
        <p>Você ainda tem {guesses} tentativas(s).</p>
      </h3>
      <div className='wordContainer'>
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={1} className="letter">
              {letters}
              </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className='letterContainer'>
        <p>Tente advinhar um letra da palavra:</p>
        <form onSubmit={handleSubmit}>

          <input type="text" name="letter" maxLength="1" required onChange = {(e) => setLetter(e.target.value)}
          value={letter}
          ref={letterImputRef}
          />

          <button>Jogar!</button>

        </form>
      </div>
      <div className='wrongLettersContainer'>
          <p>Letras já utilizadas:</p>
          {wrongLetters.map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
      </div>
    </div>
  )
}

export default Game