
import image2 from "../assets/images/unnamed.webp"
import image3 from "../assets/images/hangman300200.webp"
import { FaRegCirclePlay } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { Link } from "react-router-dom";
import { useState } from "react";
import  GameSettingsModal, { gameSettingsData } from "../components/GameSettingsModal";


const HomePage = () => {
  const [isGameSettingsOpen, setGameSettingsOpen] = useState<boolean>(false);
  const [gameFormData, setGameFormData] = useState<gameSettingsData | null>(null);
  
  const handleGameSettingsModal = () => {
    setGameSettingsOpen(!isGameSettingsOpen);
    // console.log('Hello')
    if(isGameSettingsOpen == true){
      console.log("hello_world")
    }
  };

  const handleFormSubmit = (data: gameSettingsData): void => {
    setGameFormData(data);
    handleGameSettingsModal();
  };

  return (
    <div className="text-stone-100 z-20 fixed inset-0 space-y-4 h-screen flex flex-col justify-center items-center bg-no-repeat bg-cover bg-[url('../src/assets/images/game.avif')]">
      <p className="fixed bg-black/50 -z-10 inset-0 "></p>
      <h1 className='font-rubik text-4xl md:text-5xl lg:text-7xl p-2 uppercase flex flex-col flex-wrap justify-center items-center text-center md:w-[80%] lg:w-[70%]'>
        <img src={image2} alt="" className='h-20 w-20 rounded-full'/>
        <span>Let's play the <strong className="text-green-600">hangman</strong> game</span>
      </h1>
      <div className='h-40 w-40 hidden'>
        <img src={image3} alt="bg-image" className='' />
      </div>
      <div className='text-center'>
        <p className='text-2xl'>Guess the word before your man gets hung</p>
        <div className='space-x-2 p-4 flex items-center justify-center'>
          <Link to={`/startgame`} className='p-3 rounded items-center gap-2 flex flex-col'><FaRegCirclePlay size={30} className="text-green-500"/>Start Game</Link>
          <div>
            <div>
              <button onClick={handleGameSettingsModal} className=' p-3 rounded flex flex-col items-center gap-2'><IoMdSettings size={30} className="text-stone-300"/>Quick Setup </button>
            </div>
            {gameFormData && gameFormData.username && (
              <div className="msg-box z-[999]">
                <b>{gameFormData.username}</b> requested a <b>{gameFormData.category}</b> newsletter.
              </div>
            )}
            <GameSettingsModal
                isOpen={isGameSettingsOpen}
                onSubmit={handleFormSubmit}
                onClose={handleGameSettingsModal} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage