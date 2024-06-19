import styles from '../Keyboard.module.css'

const Keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetter: (letter: string) => void
}


const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}:KeyboardProps) => {
  return (
    <div className="grid gap-[0.5rem]" style={{gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",}}>
      {
        Keys.map(data => {
          const isActive = activeLetters.includes(data)
          const isInactive = inactiveLetters.includes(data)
          return (
            <button 
              onClick={() => addGuessedLetter(data)} 
              key={data} 
              className={`${styles.btn} ${isActive ? styles.active : "" } ${isInactive? styles.inactive : ""} `}
              disabled = {isActive || isInactive || disabled}
              >{data}</button>
          )
        })
      }
    </div>
  )
}

export default Keyboard