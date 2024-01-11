import styles from './Footer.module.css'
import BtcSvg from './svg/Btc.svg';
import TSvg from './svg/T.svg';
import DSvg from './svg/D.svg';
import EthSvg from './svg/Eth.svg';
import LSvg from './svg/L.svg';
import KSvg from './svg/K.svg';
import TgSvg from './svg/tg.svg';
import YtSvg from './svg/yt.svg';
import TwSvg from './svg/tw.svg';
import InsSvg from './svg/ins.svg';
import DsSvg from './svg/ds.svg';
import FbSvg from './svg/fb.svg';
import Emblems1Svg from './svg/emblems/1.svg';
import Emblems2Svg from './svg/emblems/2.svg';
import Emblems3Svg from './svg/emblems/3.svg';
import Emblems4Svg from './svg/emblems/4.svg';
import Emblems5Svg from './svg/emblems/5.svg';
import Emblems6Svg from './svg/emblems/6.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.betsStorm}>
                    <div style={{display: 'flex',alignItems: 'center', gap: '12px'}}>
                        <img src="src\ui\frames\footer\src\logo.png" alt="" className="" />
                        betstorm
                    </div>
                    <div style={{display: 'flex',width: '320px'}}>
                        <div className={styles.betsStormText}>
                            <span style={{color: '#FFF'}}>BetStorm</span> our service will allow you to try your luck in gambling, as well as make your predictions in sports events. Play and win!
                        </div>
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.menuPart}>
                        <span style={{color: '#FFF',marginBottom: '10px'}}>Allife program</span>
                        <span>Promo</span>
                        <span>Referal</span>    
                    </div>
                    <div className={styles.menuPart}>
                        <span style={{color: '#FFF',marginBottom: '10px'}}>Promotions</span>
                        <span>Deposit</span>
                        <span>Bonus</span>    
                    </div>
                    <div className={styles.menuPart}>
                        <span style={{color: '#FFF',marginBottom: '10px'}}>About Us</span>
                        <span>News</span>
                        <span>Provably Fair</span>    
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.payments}>
                        Payments Methods
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <img src={BtcSvg} alt="" />
                            <img src={TSvg} alt="" />
                            <img src={DSvg} alt="" />
                            <img src={EthSvg} alt="" />
                            <img src={LSvg} alt="" />
                            <img src={KSvg} alt="" />
                        </div>
                        Follow Us
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <img src={TgSvg} alt="" />
                            <img src={YtSvg} alt="" />
                            <img src={TwSvg} alt="" />
                            <img src={InsSvg} alt="" />
                            <img src={DsSvg} alt="" />
                            <img style={{ marginLeft: '10px' }} src={FbSvg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <img src={Emblems1Svg} alt="" />
                <img src={Emblems2Svg} alt="" />
                <img src={Emblems3Svg} alt="" />
                <img src={Emblems4Svg} alt="" />
                <img src={Emblems5Svg} alt="" />
                <img src={Emblems6Svg} alt="" />
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomElem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M15.7587 10.076C14.6901 14.3623 10.3488 16.9708 6.06209 15.9019C1.77714 14.8333 -0.831386 10.4918 0.237662 6.20591C1.30577 1.9192 5.64704 -0.689516 9.93246 0.379063C14.2189 1.44764 16.8273 5.78965 15.7586 10.0761L15.7586 10.076H15.7587Z" fill="#FFB41A"/>
                        <path d="M11.5256 7.00033C11.6849 5.93559 10.8742 5.36325 9.76577 4.98144L10.1254 3.53915L9.2474 3.32038L8.89735 4.72469C8.66653 4.66713 8.4295 4.61289 8.19392 4.55911L8.54651 3.14553L7.66909 2.92676L7.3093 4.36858C7.1183 4.32509 6.9307 4.28211 6.74869 4.23683L6.74971 4.23229L5.53897 3.92995L5.30542 4.86767C5.30542 4.86767 5.9568 5.01699 5.94307 5.02618C6.2986 5.11491 6.3629 5.35026 6.35222 5.5368L5.94261 7.17991C5.96709 7.18613 5.99884 7.19513 6.03388 7.20921C6.00459 7.20193 5.97342 7.19399 5.94108 7.18625L5.36694 9.48801C5.32349 9.59603 5.21321 9.75813 4.96464 9.69657C4.97344 9.70932 4.32652 9.53733 4.32652 9.53733L3.89062 10.5423L5.03316 10.8271C5.24571 10.8804 5.45399 10.9362 5.65911 10.9887L5.2958 12.4475L6.17275 12.6663L6.53255 11.2229C6.77212 11.2879 7.00461 11.3479 7.23222 11.4045L6.87364 12.841L7.75165 13.0598L8.11492 11.6037C9.61204 11.887 10.7378 11.7728 11.2116 10.4187C11.5934 9.32841 11.1926 8.69956 10.4049 8.28948C10.9786 8.15718 11.4107 7.77987 11.5259 7.00045L11.5257 7.00025L11.5256 7.00033ZM9.51967 9.81319C9.24834 10.9034 7.4127 10.3141 6.81756 10.1663L7.29968 8.23359C7.89478 8.38216 9.80324 8.67617 9.51971 9.81319H9.51967ZM9.79119 6.98453C9.54368 7.97623 8.01586 7.4724 7.52025 7.34886L7.95736 5.59601C8.45297 5.71956 10.049 5.95013 9.79127 6.98453H9.79119Z" fill="white"/>
                    </svg>
                    1 BTC = 
                    <span style={{color:'#FFF'}}>$20,222.00</span>
                </div>
                <div className={styles.bottomElem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <g clipPath="url(#clip0_435_2710)">
                        <path d="M8.75035 15.2741C12.6904 15.2741 15.8845 12.0801 15.8845 8.14C15.8845 4.19992 12.6904 1.00586 8.75035 1.00586C4.81027 1.00586 1.61621 4.19992 1.61621 8.14C1.61621 12.0801 4.81027 15.2741 8.75035 15.2741Z" fill="white"/>
                        <path d="M8.75196 0.139893C7.16971 0.139893 5.62299 0.609084 4.3074 1.48814C2.9918 2.36719 1.96642 3.61662 1.36092 5.07842C0.755419 6.54023 0.596993 8.14877 0.905675 9.70061C1.21436 11.2525 1.97628 12.6779 3.0951 13.7967C4.21392 14.9156 5.63939 15.6775 7.19124 15.9862C8.74308 16.2949 10.3516 16.1364 11.8134 15.5309C13.2752 14.9254 14.5247 13.9 15.4037 12.5845C16.2828 11.2689 16.752 9.72214 16.752 8.13989V8.13989C16.755 7.09237 16.5517 6.0545 16.1537 5.08555C15.7556 4.11659 15.1706 3.23553 14.4321 2.49266C13.6935 1.74979 12.8159 1.15966 11.8493 0.755973C10.8826 0.352285 9.84597 0.142941 8.79845 0.139893H8.75196ZM8.88755 8.41108L8.05462 11.2198H12.5098C12.5393 11.2188 12.5688 11.2236 12.5964 11.2339C12.6241 11.2442 12.6494 11.2599 12.671 11.2801C12.6926 11.3002 12.71 11.3244 12.7222 11.3513C12.7345 11.3782 12.7413 11.4072 12.7423 11.4367V11.5104L12.3549 12.8469C12.3378 12.9101 12.2997 12.9656 12.2469 13.0044C12.1941 13.0431 12.1297 13.0627 12.0643 13.06H5.2459L6.38876 9.16653L5.11031 9.55394L5.40087 8.66289L6.67932 8.27549L8.28707 2.81302C8.30477 2.75016 8.34299 2.69504 8.39564 2.65643C8.4483 2.61781 8.51236 2.59793 8.57762 2.59994H10.3016C10.3311 2.59891 10.3605 2.6037 10.3882 2.61404C10.4159 2.62439 10.4412 2.64008 10.4628 2.66023C10.4844 2.68038 10.5018 2.70459 10.514 2.73147C10.5262 2.75835 10.533 2.78738 10.534 2.81689V2.8905L9.17811 7.50067L10.4566 7.11326L10.1854 8.04304L8.88755 8.41108Z" fill="#345D9D"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_435_2710">
                        <rect width="16" height="16" fill="white" transform="translate(0.751953 0.139648)"/>
                        </clipPath>
                    </defs>
                </svg>
                    1 LTC = 
                    <span style={{color:'#FFF'}}>$52.00</span>
                </div>
                <div className={styles.bottomElem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <g clipPath="url(#clip0_435_2716)">
                            <path d="M13.9697 4.35758C13.3135 3.75164 12.4057 2.82633 11.6663 2.17008L11.6225 2.13945C11.5497 2.081 11.4677 2.03516 11.3797 2.00383V2.00383C9.59691 1.67133 1.29973 0.120391 1.13785 0.140078C1.09249 0.146431 1.04914 0.162876 1.01098 0.188203L0.969414 0.221016C0.918236 0.272991 0.879366 0.335782 0.855664 0.404766L0.844727 0.433203V0.588516V0.612578C1.77879 3.21352 5.46691 11.7338 6.19316 13.7332C6.23691 13.8688 6.32004 14.127 6.47535 14.1401H6.51035C6.59348 14.1401 6.94785 13.672 6.94785 13.672C6.94785 13.672 13.2829 5.98945 13.9238 5.17133C14.0068 5.07055 14.08 4.96215 14.1425 4.84758C14.1585 4.75793 14.151 4.66568 14.1207 4.57981C14.0904 4.49394 14.0384 4.41738 13.9697 4.35758V4.35758ZM8.57316 5.25227L11.2769 3.01008L12.8629 4.47133L8.57316 5.25227ZM7.52316 5.1057L2.86816 1.2907L10.3997 2.67977L7.52316 5.1057ZM7.94316 6.10539L12.7075 5.33758L7.26066 11.9001L7.94316 6.10539ZM2.23598 1.67133L7.13379 5.82758L6.42504 11.9045L2.23598 1.67133Z" fill="#FF060A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_435_2716">
                            <rect width="14" height="14" fill="white" transform="translate(0.505859 0.139648)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    1 TRX = 
                    <span style={{color:'#FFF'}}>$0.66</span>
                </div>
                <div className={styles.bottomElem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <g clipPath="url(#clip0_435_2722)">
                            <path d="M8.25188 0.139893L8.14453 0.504511V11.084L8.25188 11.1911L13.1626 8.28826L8.25188 0.139893Z" fill="#343434"/>
                            <path d="M8.25073 0.139893L3.33984 8.28826L8.25073 11.1911V6.05608V0.139893Z" fill="#8C8C8C"/>
                            <path d="M8.2519 12.1213L8.19141 12.195V15.9636L8.2519 16.1402L13.1657 9.21997L8.2519 12.1213Z" fill="#3C3C3B"/>
                            <path d="M8.25073 16.1402V12.1213L3.33984 9.21997L8.25073 16.1402Z" fill="#8C8C8C"/>
                            <path d="M8.25 11.1909L13.1608 8.28808L8.25 6.05591V11.1909Z" fill="#141414"/>
                            <path d="M3.33984 8.28808L8.25073 11.1909V6.05591L3.33984 8.28808Z" fill="#393939"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_435_2722">
                            <rect width="16" height="16" fill="white" transform="translate(0.253906 0.139893)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    1 ETH = 
                    <span style={{color:'#FFF'}}>$1,222.00</span>
                </div>

                <div style={{
                    position: 'absolute',
                    bottom:'0px',
                    left:'50%',
                    transform: 'translateX(-50%)',
                    color:'#576081'

                }}>
                    Copyright (C) 2022 <span style={{color:'#FFF'}}>Onflow Design.</span> All Rights Reserved. 
                </div>
            </div>
        </div>
    )
}

export default Footer