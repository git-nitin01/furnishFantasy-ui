import React, { useState } from 'react';
import Modal from './Modal';
import useAuth from '../../hooks/useAuth';
import Dialog from './Dialog';

const Login = () => {
    const { user } = useAuth(); // Assuming you have an authentication context or hook


    const [isClicked, setIsClicked] = useState(false);
    const styles = "text-black bg-transparent p-0 border-0 focus:outline-none";

    const clickHandler = () => {
        setIsClicked(!isClicked);
    }


    return (
        <>
            {user ? (
              <>
                <span className="mr-2">Welcome, {user?.name}</span>
              </>
            ) : 
            (<>
                <button className={styles} onClick={clickHandler}>
                    Login
                </button>
                <Modal isActivated={isClicked}>
                    <Dialog />
                </Modal>
            </>
            )
            }
        </>
    );
}

export default Login;