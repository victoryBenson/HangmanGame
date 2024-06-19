
//head
const Head  = (
    <div className="w-[45px] h-[45px] border-[5px] rounded-full absolute top-[50px] border-black right-[-20px]"/>
)

//body
const Body  = (
    <div className="w-[5px] h-[100px] bg-black  right-0 absolute top-[94px] border-black"/>
)

//rightArm
const RightArm = (
    <div
      className="w-[60px] h-[5px] bg-black absolute top-[148px] right-[-60px] rotate-[-30deg] origin-bottom-left"
    />
  )
  
//leftArm
const LeftArm = (
<div
    className="w-[60px] h-[5px] bg-black absolute top-[150px] right-[1px] rotate-[30deg] origin-bottom-right"
/>
)
  
//rightLeg
const RightLeg = (
<div
    className="w-[90px] h-[5px] bg-black absolute top-[191px] right-[-86px] rotate-[60deg] origin-bottom-left"
/>
)
  
//leftLeg
const LeftLeg = (
<div
    className="w-[90px] h-[5px] bg-black absolute top-[190px] right-0 rotate-[-60deg] origin-bottom-right"
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
        <div className='h-[50px] w-[5px] bg-black absolute top-0 right-0'/>
        <div className='h-[5px] w-[150px] bg-black ml-[120px]'/>
        <div className='h-[300px] w-[5px] bg-black ml-[120px]'/>
        <div className='h-[5px] w-[250px] bg-black'/>
    </div>
  )
}

export default HangmanDrawing