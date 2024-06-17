import { useCallback, useEffect, useState } from "react";
import words from './wordList.json';
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)] //pick words @ random
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );


  const addGuessedLetter = useCallback(
    (letter: string) => {

        if (guessedLetters.includes(letter)) return
    
        setGuessedLetters(currentLetters  => [...currentLetters, letter])
        
      },
      [guessedLetters]
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

  return (
    <div className=" flex flex-col items-center justify-center gap-8 m-0 min-h-screen">
        <div className="text-center">
            Lose Win
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
        <div className="self-stretch">
            <Keyboard/>
        </div>
    </div>
  )
}

export default App
