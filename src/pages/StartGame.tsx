import { useCallback, useEffect, useState } from "react";
import words from '../database/wordList.json';
import HangmanDrawing from "../components/HangmanDrawing";
import HangmanWord from "../components/HangmanWord";
import Keyboard from "../components/Keyboard";


function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function StartGame() {
  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
      letter => !wordToGuess.includes(letter)
    );

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {

        if (guessedLetters.includes(letter) || isLoser || isWinner) return
    
        setGuessedLetters(currentLetters  => [...currentLetters, letter])
        
      },
      [guessedLetters, isLoser, isWinner]
  )
  
   
  //check if you clicked any button
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])


  //click enter button to refresh the game!
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div className=" flex items-center justify-center gap-8 min-h-screen">
      <div className="space-y-2 flex items-center flex-col p-3">  
        <div className="font-bold text-xl text-center">{!isWinner && !isLoser && "Hangman Game!"}</div> 
        <div className="text-center text-lg py-2">
          {isWinner && <><strong className="text-green-500 text-3xl">You Won! </strong> <p onClick={()=> location.reload()} className="font-base bg-blue-400 text-white p-1 rounded my-2">Play again</p></>}
          {isLoser && <><strong className="text-red-500 text-3xl">Failed</strong> <p onClick={()=> location.reload()} className="font-base bg-blue-400 text-white p-1 rounded my-2">Try again</p></>}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
        <HangmanWord reveal={isLoser}  guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
        <div className="self-stretch">
            <Keyboard 
              disabled = {isWinner || isLoser}
              activeLetters = {guessedLetters.filter(letter => (
                wordToGuess.includes(letter)
              ))}
              inactiveLetters = {incorrectLetters}
              addGuessedLetter = {addGuessedLetter}
            />
        </div>
        <div>
          <strong>Hint:</strong> Find the word that will match the empty space above
        </div>
      </div>
    </div>
  )
}

export default StartGame
