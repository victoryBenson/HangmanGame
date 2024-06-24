import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";


    export interface GameSettingsData {
        category: string;
        sound: string;
        username: string
    }
    
    const initialGameSettingsData: GameSettingsData = {
        category: 'random',
        sound: 'yes',
        username: "Player"
    };

    interface GameSettingsProps {
        isOpen: boolean;
        onSubmit: (data: GameSettingsData) => void;
        onClose: () => void;
    }

const GameSettingsModal= ({isOpen, onSubmit, onClose}:GameSettingsProps) => {   
    const focusInputRef = useRef<HTMLInputElement | null>(null);
    const [formState, setFormState] = useState<GameSettingsData>(initialGameSettingsData);
    const navigate = useNavigate()


    useEffect(() => {
        if (isOpen && focusInputRef.current) {
            setTimeout(() => {
            focusInputRef.current!.focus();
          }, 0);
        }
    }, [isOpen]);

    //handleInputChange
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = event.target;
        setFormState((prevFormData) => ({...prevFormData,[name]: value}));
    };


    //handleSubmit
    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        onSubmit(formState);
        navigate('/startgame')
        // setFormState(initialGameSettingsData); //reset to normal state
    };
    

  return (
    <Modal isOpen={isOpen} hasCloseBtn={true} onClose={onClose}>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col text-start">
            <div className="w-[100%] flex flex-col">
                <label htmlFor="text" className="font-semibold">Enter your name</label>
                <input
                    ref={focusInputRef}
                    type="text"
                    id="username"
                    name="username"
                    value={formState.username}
                    onChange={handleInputChange}
                    required
                    placeholder="player name"
                    className="p-2 border outline-gray-200 outline-0 rounded"
                />
            </div>
            <div className="w-[100%] flex flex-col">
                <label htmlFor="category" className="font-semibold">Choose Category</label>
                <select
                id="category"
                name="category"
                value={formState.category}
                onChange={handleInputChange}
                required
                className="p-2 border outline-gray-200 outline-0 rounded"
                >
                    <option value="random">Random</option>
                    <option value="animal">Animal</option>
                    <option value="fruits">Fruits</option>
                    <option value="music">Music</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </select>
            </div>
            <div className="w-[100%] flex flex-col">
                <label htmlFor="sound" className="font-semibold">Sound</label>
                <select
                id="sound"
                name="sound"
                value={formState.sound}
                onChange={handleInputChange}
                required
                className="p-2 border outline-gray-200 outline-0 rounded"
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
            <div className=" text-center text-white">
                <button type="submit" className="w-full p-2 bg-green-600 rounded shadow drop">Proceed</button>
            </div>
        </form> 
       
    </Modal>
  )
}

export default GameSettingsModal;