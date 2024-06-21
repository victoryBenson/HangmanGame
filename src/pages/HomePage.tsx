
import image2 from "../assets/images/unnamed.webp"
import image3 from "../assets/images/hangman300200.webp"
import { FaRegCirclePlay } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';

const HomePage = () => {
  return (
    <div className="text-stone-100 z-20 fixed inset-0 space-y-4 h-screen flex flex-col justify-center items-center bg-no-repeat bg-cover bg-[url('../src/assets/images/game.avif')]">
      <p className="fixed bg-black/50 -z-10 inset-0 "></p>
      <h1 className='font-rubik text-4xl md:text-7xl p-2 uppercase flex flex-col flex-wrap justify-center items-center text-center'>
        <img src={image2} alt="" className='h-20 w-20 rounded-full'/>
        <span>Let's play the hangman game</span>
      </h1>
      <div className='h-40 w-40 hidden'>
        <img src={image3} alt="bg-image" className='' />
      </div>
      <div className='text-center'>
        <p className='text-2xl'>Guess the word before your man gets hung</p>
        <div className='space-x-2 p-4 flex items-center justify-center'>
          <button className='bg-green-600 p-3 rounded font-bold flex items-center gap-2'>Start Game<FaRegCirclePlay /></button>
          <button className='bg-stone-100 text-stone-800 p-3 rounded font-bold flex items-center gap-2'>Quick Setup <IoMdSettings /></button>
        </div>
      </div>
    </div>
  )
}

export default HomePage