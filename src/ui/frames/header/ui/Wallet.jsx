import React from 'react';
import styles from '../Header.module.css';

const Wallet = () => {
  return (
    <div className={styles.walletContainer}>
        <div className={styles.walletRec1} style={{width: '20px', height: '20px', display: 'flex'}}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.75684 0.286133V5.87843L9.37038 7.99052L4.75684 0.286133Z" fill="white" fillOpacity="0.602"/>
                <path d="M4.75575 0.288086L0.141602 7.99247L4.75575 5.88038V0.288086Z" fill="white"/>
                <path d="M4.75684 11.6154V15.4153L9.37345 8.87158L4.75684 11.6154Z" fill="white" fillOpacity="0.602"/>
                <path d="M4.75575 15.4153V11.6148L0.141602 8.87158L4.75575 15.4153Z" fill="white"/>
                <path d="M4.75684 10.7356L9.37038 7.9912L4.75684 5.88037V10.7356Z" fill="white" fillOpacity="0.2"/>
                <path d="M0.141602 7.99022L4.75575 10.7347V5.87939L0.141602 7.99022Z" fill="white" fillOpacity="0.602"/>
            </svg>
        </div>

        <p>12.85525</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="4" viewBox="0 0 9 6" fill="none">
            <path d="M1 1L4.5 5L8 1" stroke="#576081" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <div className={styles.walletRec2}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.08301 10L2.0835 6.36353C2.0835 5.40673 2.67459 4.55441 3.57337 4.21672L10.0025 1.80462C11.0066 1.42672 12.0835 2.16646 12.0835 3.23582V6.29114" fill="white" fillOpacity="0.32"/>
                <path d="M2.08301 10L2.0835 6.36353C2.0835 5.40673 2.67459 4.55441 3.57337 4.21672L10.0025 1.80462C11.0066 1.42672 12.0835 2.16646 12.0835 3.23582V6.29114" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <g filter="url(#filter0_b_467_473)">
                    <path d="M15.0335 11.2065C14.6835 11.5422 14.4835 12.0253 14.5335 12.541C14.6085 13.4253 15.4335 14.072 16.3335 14.072H17.9168V15.0463C17.9168 16.741 16.5085 18.1247 14.7835 18.1247H5.21683C3.49183 18.1247 2.0835 16.741 2.0835 15.0463V9.53638C2.0835 7.84164 3.49183 6.45801 5.21683 6.45801H14.7835C16.5085 6.45801 17.9168 7.84164 17.9168 9.53638V10.7153H16.2335C15.7668 10.7153 15.3418 10.8954 15.0335 11.2065Z" fill="white" fillOpacity="0.32"/>
                    <path d="M15.0335 11.2065C14.6835 11.5422 14.4835 12.0253 14.5335 12.541C14.6085 13.4253 15.4335 14.072 16.3335 14.072H17.9168V15.0463C17.9168 16.741 16.5085 18.1247 14.7835 18.1247H5.21683C3.49183 18.1247 2.0835 16.741 2.0835 15.0463V9.53638C2.0835 7.84164 3.49183 6.45801 5.21683 6.45801H14.7835C16.5085 6.45801 17.9168 7.84164 17.9168 9.53638V10.7153H16.2335C15.7668 10.7153 15.3418 10.8954 15.0335 11.2065Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <path d="M18.6916 11.6212V13.2961C18.6916 13.7432 18.3341 14.1091 17.8792 14.1253H16.287C15.4097 14.1253 14.6054 13.483 14.5323 12.605C14.4836 12.0928 14.6785 11.6131 15.0197 11.2798C15.3203 10.9708 15.7346 10.792 16.1895 10.792H17.8792C18.3341 10.8083 18.6916 11.1741 18.6916 11.6212Z" fill="white" fillOpacity="0.32" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.8335 10H11.6668" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                    <filter id="filter0_b_467_473" x="-22.6167" y="-18.2422" width="65.2334" height="61.0669" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="12"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_467_473"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_467_473" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
        
    </div>
  );
};

export default Wallet;
