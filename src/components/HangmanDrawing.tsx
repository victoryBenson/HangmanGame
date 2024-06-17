
//head
const Head  = (
    <div className="w-[50px] h-[50px] border-[10px] rounded-full absolute top-[50px] border-black right-[-20px]"/>
)

//body
const Body  = (
    <div className="w-[10px] h-[100px] bg-black  right-0 absolute top-[100px] border-black"/>
)

//rightArm
const RightArm = (
    <div
      className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[-100px] rotate-[-30deg] origin-bottom-left"
    />
  )
  
//leftArm
const LeftArm = (
<div
    className="w-[100px] h-[10px] bg-black absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right"
/>
)
  
//rightLeg
const RightLeg = (
<div
    className="w-[100px] h-[10px] bg-black absolute top-[190px] right-[-90px] rotate-[60deg] origin-bottom-left"
/>
)
  
//leftLeg
const LeftLeg = (
<div
    className="w-[100px] h-[10px] bg-black absolute top-[190px] right-0 rotate-[-60deg] origin-bottom-right"
/>
)

const BodyParts = [Head, Body, RightArm, RightLeg, LeftArm, LeftLeg]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
  return (
    <div className='relative'>
        {BodyParts.slice(0, numberOfGuesses)}
        <div className='h-[50px] w-[10px] bg-black absolute top-0 right-0'/>
        <div className='h-[10px] w-[200px] bg-black ml-[120px]'/>
        <div className='h-[300px] w-[10px] bg-black ml-[120px]'/>
        <div className='h-[10px] w-[250px] bg-black'/>
    </div>
  )
}

export default HangmanDrawing