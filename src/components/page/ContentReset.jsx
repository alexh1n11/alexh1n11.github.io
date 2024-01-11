import React, { useState, useRef } from 'react';
import styles from './LoginPopUp.module.css';

const ContentReset = ({loginClicked, setLoginClicked, resetClicked, setResetClicked}) => {
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const [code, setCode] = useState(['', '', '', '']);
    const [activeInput, setActiveInput] = useState(0);
    const handleChange = (index, value) => {
        if (index === inputRefs.length - 1 && value.length > 1) {
            return;
        }
      
          // Проверка для разрешения ввода только в текущий активный инпут
        if (index !== activeInput) {
            return;
        }
      
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
      
          // Переход к следующему инпуту при вводе значения
        if (index < inputRefs.length - 1 && value !== '') {
            setActiveInput(index + 1);
            inputRefs[index + 1].current.focus();
        }
      
          // Переход к предыдущему инпуту при удалении значения
        if (index > 0 && value === '') {
            setActiveInput(index - 1);
            inputRefs[index - 1].current.focus();
        }
    };
    const toggleLoginClicked = () => {
        setLoginClicked(false);
    };
    const toggleResetClicked = () => {
        setResetClicked(false);
    };
  return (
            <div className={styles.contentCode}>

                <button onClick={toggleLoginClicked} style={{position: 'absolute', top: '20px', right: '20px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M0.33546 0.33546C0.550319 0.120665 0.841693 0 1.1455 0C1.44932 0 1.74069 0.120665 1.95555 0.33546L6.00692 4.38683L10.0583 0.33546C10.2744 0.126752 10.5638 0.0112672 10.8642 0.0138777C11.1646 0.0164882 11.452 0.136985 11.6644 0.349417C11.8768 0.561848 11.9973 0.849216 12 1.14963C12.0026 1.45004 11.8871 1.73946 11.6784 1.95555L7.62701 6.00692L11.6784 10.0583C11.8871 10.2744 12.0026 10.5638 12 10.8642C11.9973 11.1646 11.8768 11.452 11.6644 11.6644C11.452 11.8768 11.1646 11.9973 10.8642 12C10.5638 12.0026 10.2744 11.8871 10.0583 11.6784L6.00692 7.62701L1.95555 11.6784C1.73946 11.8871 1.45004 12.0026 1.14963 12C0.849216 11.9973 0.561848 11.8768 0.349417 11.6644C0.136985 11.452 0.0164882 11.1646 0.0138777 10.8642C0.0112672 10.5638 0.126752 10.2744 0.33546 10.0583L4.38683 6.00692L0.33546 1.95555C0.120665 1.74069 0 1.44932 0 1.1455C0 0.841693 0.120665 0.550319 0.33546 0.33546Z" fill="#576081"/>
                    </svg>
                </button>
                <button onClick={toggleResetClicked} style={{position: 'absolute', display: 'flex', alignItems: 'center', gap: '10px', top: '20px', left: '20px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                        <path d="M17 4.00028H3.14L5.77 1.64028C5.93974 1.43606 6.0214 1.17278 5.99702 0.908352C5.97264 0.643926 5.84422 0.400015 5.64 0.230276C5.43578 0.0605376 5.1725 -0.0211248 4.90808 0.00325492C4.64365 0.0276346 4.39974 0.15606 4.23 0.360276L0.23 4.36028C0.196361 4.408 0.166279 4.45814 0.14 4.51028C0.14 4.56028 0.14 4.59028 0.0700002 4.64028C0.0246737 4.75493 0.000941121 4.87699 0 5.00028C0.000941121 5.12356 0.0246737 5.24562 0.0700002 5.36028C0.0700002 5.41028 0.0699999 5.44028 0.14 5.49028C0.166279 5.54242 0.196361 5.59255 0.23 5.64028L4.23 9.64028C4.32402 9.75316 4.44176 9.84394 4.57485 9.90616C4.70793 9.96838 4.85309 10.0005 5 10.0003C5.23365 10.0007 5.46009 9.91936 5.64 9.77028C5.74126 9.68633 5.82496 9.58323 5.88631 9.46688C5.94766 9.35053 5.98546 9.22322 5.99754 9.09225C6.00961 8.96127 5.99573 8.8292 5.95669 8.7036C5.91764 8.57799 5.8542 8.46132 5.77 8.36028L3.14 6.00028H17C17.2652 6.00028 17.5196 5.89492 17.7071 5.70738C17.8946 5.51985 18 5.26549 18 5.00028C18 4.73506 17.8946 4.48071 17.7071 4.29317C17.5196 4.10563 17.2652 4.00028 17 4.00028Z" fill="#576081"/>
                    </svg>
                    Back
                </button>

                <div className={styles.title}>
                    <p className={styles.title1}>RESET PASSWORD</p>
                    <p className={styles.title2}>We have sent the code to your email, please enter code to the field below.</p>
                </div>
                <div className={styles.resetEntryRow}>
                    {inputRefs.map((ref, index) => (
                        <input
                            key={index}
                            ref={ref}
                            type="number"
                            id={`number${index + 1}`}
                            name={`number${index + 1}`}
                            className={styles.inputDataCode}
                            value={code[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                        />
                    ))}
                </div>

                <div className={styles.newCode}>
                    <div className={styles.newCodeButton}>Confirm</div>
                    <p style={{marginLeft: '27.5px'}}>Not received code? <span className={styles.newCode1}>Send code again</span></p>
                </div>
                

            </div>
  );
};

export default ContentReset;
