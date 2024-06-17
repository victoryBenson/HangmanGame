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


const Keyboard = () => {
  return (
    <div className="grid gap-[0.5rem]" style={{gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",}}>
      {
        Keys.map(data => {
          return (
            <button key={data} className={`${styles.btn}`}>{data}</button>
          )
        })
      }
    </div>
  )
}

export default Keyboard