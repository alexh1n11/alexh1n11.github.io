import React from 'react';
import styles from '../Header.module.css';

const ProfileToolTip = () => {
 return (
    <div className={styles.profilePanel}>
        <div className={styles.profileContainer}>
            <div className={styles.profileIco}></div>
            <p className={styles.profileName}>Zedorules</p>
            <div className={styles.profileArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                    <path d="M1 1L4.5 5L8 1" stroke="#576081" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

        </div>
        <div className={styles.profileMessage} style={{cursor: 'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect width="44" height="44" rx="20" fill="#171E2F"/>
                <path d="M16.6667 15C15.9594 15 15.2811 15.2739 14.781 15.7615C14.281 16.2491 14 16.9104 14 17.6V17.8613L22 22.0616L30 17.8626V17.6C30 16.9104 29.719 16.2491 29.219 15.7615C28.7189 15.2739 28.0406 15 27.3333 15H16.6667ZM30 19.3381L22.316 23.372C22.2189 23.423 22.1103 23.4497 22 23.4497C21.8897 23.4497 21.7811 23.423 21.684 23.372L14 19.3381V25.4C14 26.0896 14.281 26.7509 14.781 27.2385C15.2811 27.7261 15.9594 28 16.6667 28H27.3333C28.0406 28 28.7189 27.7261 29.219 27.2385C29.719 26.7509 30 26.0896 30 25.4V19.3381Z" fill="#576081"/>
            </svg>
        </div>

        <div className={styles.profileNotification} style={{cursor: 'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="22" fill="#171E2F"/>
                <path d="M28.1168 25.7847L27.2834 24.3477C27.1084 24.0274 26.9501 23.4214 26.9501 23.0665V20.8764C26.9501 18.8421 25.8001 17.0849 24.1418 16.2625C23.7084 15.4661 22.9084 14.9727 21.9918 14.9727C21.0834 14.9727 20.2668 15.4834 19.8334 16.2885C18.2084 17.1281 17.0834 18.8681 17.0834 20.8764V23.0665C17.0834 23.4214 16.9251 24.0274 16.7501 24.339L15.9084 25.7847C15.5751 26.3647 15.5001 27.0053 15.7084 27.5939C15.9084 28.1739 16.3834 28.624 17.0001 28.8404C18.6168 29.4118 20.3168 29.6888 22.0168 29.6888C23.7168 29.6888 25.4168 29.4118 27.0334 28.8491C27.6168 28.65 28.0668 28.1912 28.2834 27.5939C28.5001 26.9966 28.4418 26.3387 28.1168 25.7847Z" fill="#576081"/>
                <path d="M24.3582 30.5629C24.0082 31.567 23.0832 32.2855 21.9999 32.2855C21.3416 32.2855 20.6916 32.0085 20.2332 31.5151C19.9666 31.2554 19.7666 30.9091 19.6499 30.5542C19.7582 30.5715 19.8666 30.5802 19.9832 30.5975C20.1749 30.6235 20.3749 30.6494 20.5749 30.6667C21.0499 30.71 21.5332 30.736 22.0166 30.736C22.4916 30.736 22.9666 30.71 23.4332 30.6667C23.6082 30.6494 23.7832 30.6408 23.9499 30.6148C24.0832 30.5975 24.2166 30.5802 24.3582 30.5629Z" fill="#576081"/>
            </svg>    
        </div>

    </div>
 )
}

export default ProfileToolTip