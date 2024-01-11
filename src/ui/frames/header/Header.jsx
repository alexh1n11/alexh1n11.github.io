import styles from './Header.module.css'
import ToggleButton from './buttons/ToggleButton'
import SearchButton from './buttons/SearchButton'
import ProfileToolTip from './ui/ProfileToolTip'
import Wallet from './ui/Wallet'

const Header = ({casinoOrSport, toggleCasinoOrSport, userLogged, registerClicked, setRegisterClicked, loginClicked, setLoginClicked}) => {
    const toggleRegisterClicked = () => {
        setRegisterClicked(true);
    };
    const toggleLoginClicked = () => {
        setLoginClicked(true);
    };
    return (
        <div className={styles.header}>
            <div className={styles.homeLogo}></div>
            <div className={styles.panel}>
                <ToggleButton casinoOrSport = {casinoOrSport} toggleCasinoOrSport = {toggleCasinoOrSport}/>
                <SearchButton />
            </div>
            {userLogged ? <Wallet /> : null}
            {userLogged ? <ProfileToolTip /> : null}
            {!userLogged ?
                <div className={styles.signInButtons}>
                    <button className={styles.logIn} onClick = {toggleLoginClicked}>Log In</button>
                    <button className={styles.regIn} onClick={toggleRegisterClicked}>Register</button>
                </div> : null
            }

        </div>
        
    )
}

export default Header