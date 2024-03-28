import React, { useState, useEffect, Children} from 'react'
import ReactDOM  from 'react-dom'

const Modal = (props) => {
    const { isActivated, children} = props 
    const [isOpen, setIsOpen] = useState(isActivated)
    const modalRoot = document.createElement('div')
    modalRoot.className = "z-[1000] w-screen h-screen fixed top-0 flex justify-center items-center bg-black/50 flex-col"
    
    useEffect(() => {
        setIsOpen(isActivated);
        // clean-up
        return () => {
            setIsOpen(false)
        }
    }, [isActivated])

    const showModal = () => {
        document.body.appendChild(modalRoot)
        document.body.style.overflow = 'hidden'
    }

    
    useEffect(()=>{
        isOpen && showModal()
        // clean-up
        return () => {
            modalRoot.remove();
            document.body.style.overflow = 'auto'
        }
    },[isOpen])

    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

    const hoverTransition = 'transition duration-300 ease-in-out'
    return ReactDOM.createPortal(
    <>  
        <button onClick={clickHandler} className={`absolute top-[10%] xl:top-[15%] rounded-full px-3 py-1.5 bg-white text-black border-0 hover:bg-black hover:bg-opacity-80 hover:text-white focus:outline-none ${hoverTransition}`}>
            &#10006;
        </button>
        {children}
    </>, modalRoot)
}

export default Modal;