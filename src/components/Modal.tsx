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

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);


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
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="p-8 rounded-xl shadow-lg border-0 max-w-[20rem] relative">
        {hasCloseBtn && (
            <button className="modal-close-btn font-semibold text-stone-500 underline decoration-2 decoration-green-600 absolute top-0 right-2 text-sm p-2" onClick={handleCloseModal}>Close</button>
        )}
        {children}
    </dialog>
  )
}

export default Modal