
import image2 from "../assets/images/unnamed.webp"
import image3 from "../assets/images/hangman300200.webp"
import { FaRegCirclePlay } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';

const HomePage = () => {
  return (
    <div className="text-stone-100 space-y-4 relative min-h-screen flex flex-col justify-center items-center bg-no-repeat bg-cover bg-[url('../src/assets/images/game.avif')]">
      <h1 className='font-rubik text-7xl p-2 uppercase flex flex-wrap justify-center items-center'>
        The Hangman
        <img src={image2} alt="" className='h-20 w-20 rounded-full'/>
      </h1>
      <div className='h-40 w-40 hidden'>
        <img src={image3} alt="bg-image" className='' />
      </div>
      <div className='text-center'>
        <p className='text-2xl'>Guess the word before your man gets hung</p>
        <div className='space-x-2 p-4 flex items-center justify-center'>
          <button className='bg-green-600 p-3 rounded font-bold flex items-center gap-2'>Start Game<FaRegCirclePlay /></button>
          <button className='bg-white text-stone-800 p-3 rounded font-bold flex items-center gap-2'>Settings <IoMdSettings /></button>
        </div>
      </div>
    </div>
  )
}

export default HomePage