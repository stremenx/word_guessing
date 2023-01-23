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
        {letters.map((letters, i) => (
          guessedLetters.includes(letters) ? (
            <span key={1} className="letter">
              {letters}
              </span>
          ) : (
            <span key={1} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className='letterContainer'>
        <p>Tente advinhar um letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className='wrongLettersContainer'>
          <p>Letras já utilizadas:</p>
          {wrongLetters.map((letters, i) => (
            <span key={i}>{letters}</span>
          ))}
      </div>
    </div>
  )
}

export default Game