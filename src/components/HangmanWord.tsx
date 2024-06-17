
type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string
}

const HangmanWord = ({guessedLetters, wordToGuess}: HangmanWordProps) => {

  return (
    <div className="flex font-bold uppercase font-mono gap-1 text-5xl">{
        wordToGuess.split('').map((letter, index) => (
            <span key={index} style={{ borderBottom: ".1em solid black" }}>
                <span className={`${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>
                    {letter}
                </span>
            </span>
        ))
    }</div>
  )
}

export default HangmanWord