import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";


    export interface gameSettingsData {
        category: string;
        sound: string;
        username: string
    }
    
    const initialGameSettingsData: gameSettingsData = {
        category: 'random',
        sound: 'yes',
        username: "Player"
    };

    interface gameSettingsProps {
        isOpen: boolean;
        onSubmit: (data: gameSettingsData) => void;
        onClose: () => void;
    }

const GameSettingsModal: React.FC<gameSettingsProps> = ({isOpen, onSubmit, onClose}) => {   
    const focusInputRef = useRef<HTMLInputElement | null>(null);
    const [formState, setFormState] = useState<gameSettingsData>(initialGameSettingsData);

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
        // setFormState(initialGameSettingsData); //reset to normal state
    };
    

  return (
    <Modal isOpen={isOpen} hasCloseBtn={true} onClose={onClose}>
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="text">Enter you name</label>
                <input
                    ref={focusInputRef}
                    type="text"
                    id="username"
                    name="username"
                    value={formState.username}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-row">
                <label htmlFor="category">Category</label>
                <select
                id="category"
                name="category"
                value={formState.category}
                onChange={handleInputChange}
                required
                >
                    <option value="random">Random</option>
                    <option value="animal">Animal</option>
                    <option value="fruits">Fruits</option>
                    <option value="music">Music</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </select>
            </div>
            <div className="form-row">
                <label htmlFor="sound">Sound</label>
                <select
                id="sound"
                name="sound"
                value={formState.sound}
                onChange={handleInputChange}
                required
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </div>
            <div className="form-row">
                <button type="submit">Proceed</button>
            </div>
        </form> 
    </Modal>
  )
}

export default GameSettingsModal;