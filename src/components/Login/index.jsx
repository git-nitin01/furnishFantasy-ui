import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import Dialog from './Dialog';

const Login = () => {
    const [isUser, setIsUser] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const styles = "text-black bg-transparent p-0 border-0 focus:outline-none";

    const clickHandler = () => {
        setIsClicked(!isClicked);
    }

    useEffect(() => {
        if(localStorage.getItem('userName')) {
            setIsUser(true);
        }
    }, [isUser]);

    const logOutHandler = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail'); 
        localStorage.removeItem('userPassword');
        setIsUser(false);
    };

    return (
        <>
            {isUser ? (
              <>
                {console.log(`Welcome, ${localStorage.getItem('userName')}`)}
                <span className="mr-2">Welcome, {localStorage.getItem('userName')}</span>
                <button className={styles} onClick={logOutHandler}>
                    Logout
                </button>
              </>
            ) : 
            (<>
                <button className={styles} onClick={clickHandler}>
                    Login
                </button>
                <Modal isActivated={isClicked}>
                    <Dialog setIsUser={setIsUser}/>
                </Modal>
            </>
            )
            }
        </>
    );
}

export default Login;