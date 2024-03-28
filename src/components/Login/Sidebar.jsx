import React from 'react'
function Sidebar({isClicked, setIsClicked}) {
    const styles = 'bg-woody z-[999] left-2/4 absolute h-full flex items-center justify-center flex-col w-2/4 sm:w-[250px] sm:p-[40px]'
    const toLeft = 'translate-x-[-100%]'
    const toRight = 'translate-x-[0%]'
    const transition = 'transition-transform duration-500 ease-in-out'
    const buttonStyles = 'text-white outline py-3 px-10 rounded-3xl hover:bg-white hover:text-black transition duration-300 ease-in-out'

    const clickHandler = () => {
        setIsClicked(!isClicked);
    }


    return (
        <div id="overlay" className={isClicked ? `${styles} ${toLeft} ${transition}` 
        : `${styles} ${toRight} ${transition}`}>
                <button id="userButton" onClick={clickHandler} className='submitBtn'>
                {
                    isClicked ? <span className={`${buttonStyles}`}>
                        Sign In
                    </span> :
                        <span className={`${buttonStyles}`}>
                        Sign Up
                    </span>
                }
                </button>
        </div>
    )
}

export default Sidebar