import React, { useState } from 'react';
import styles from './LoginPopUp.module.css';
import ContentLogIn from './ContentLogIn';
import ContentReset from './ContentReset';

const LoginPopUp = ({loginClicked, setLoginClicked, registerClicked, setRegisterClicked, userLogged, setUserLogged}) => {
    const [resetClicked, setResetClicked] = useState(false);
    const toggleLoginClicked = () => {
        setLoginClicked(false);
    };
    const toggleLoginButtonClick = () => {
        setUserLogged(true)
        setLoginClicked(false);
    }
  return (
    <div className={styles.popUpOverlay}>
        <div className={styles.registerPopUp}>
            <div className={styles.imgContainer}></div>
            {!resetClicked ? 
            <ContentLogIn loginClicked = {loginClicked} setLoginClicked = {setLoginClicked} resetClicked ={resetClicked} setResetClicked= {setResetClicked} registerClicked ={registerClicked} setRegisterClicked= {setRegisterClicked} toggleLoginButtonClick ={toggleLoginButtonClick}/>:
            <ContentReset loginClicked = {loginClicked} setLoginClicked = {setLoginClicked} resetClicked ={resetClicked} setResetClicked= {setResetClicked}/>}
            
        </div>
    </div>
  );
};

export default LoginPopUp;
