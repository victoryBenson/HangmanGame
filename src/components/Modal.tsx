import { ReactNode, useEffect, useRef, useState } from "react"

interface ModalProps{
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: ReactNode

}

const Modal: React.FC<ModalProps> = ({isOpen, hasCloseBtn, onClose, children}) => {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const [isModalOpen, setModalOpen] = useState(isOpen);


    //check the state of the modal either its open or close
    useEffect(() => {
        const modalElement = modalRef.current;
        if(modalElement){
            if (isModalOpen) {
                modalElement.showModal()
            } else {
                modalElement.close()
            }
        }
    },[isModalOpen])

    //close modal
    const handleCloseModal = ():void => {
        if(onClose){
            onClose()
        }
        setModalOpen(false)
    }

    //close modal with escape key
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if(event.key === "Escape"){
            handleCloseModal()
        }
    }

return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
        {hasCloseBtn && (
            <button className="modal-close-btn" onClick={handleCloseModal}>Close</button>
        )}
        {children}
    </dialog>
  )
}

export default Modal