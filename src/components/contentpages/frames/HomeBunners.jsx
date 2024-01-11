import styles from '../ContentHome.module.css'
import BitcoinSvg from '../src/Svg/BitcoinSvg'
import EthereumSvg from '../src/Svg/EthereumSvg'
import BinanceSvg from '../src/Svg/BinanceSvg'
import TronSvg from '../src/Svg/TronSvg'
import TetherSvg from '../src/Svg/TetherSvg'
import SolanaSvg from '../src/Svg/SolanaSvg'

const HomeBunners = () => {
    let BImgStyles={
        position: 'absolute',
        bottom: '5px', 
        left: '8px', 
        width: '120px', 
        height: '109px', 
        backgroundImage: 'url("/home/money.png")', 
        backgroundSize: 'cover',
     }
     let BTextStyles={
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    gap: '4px',
                    fontSize: '20px',
                    letterSpacing: '0.4px',
                    left: '120px',
                    bottom: '24px'
    }
 return (
   <>
    <div className={styles.banners}>
         <div className={styles.bannersButtons}>
            <button className={styles.bannersButtonsElement}>
               <img style={{position: 'absolute', top: '0', left: '0'}} src="/home/btbg1.png" alt="" />
               <div style={BImgStyles}></div>
               <div style={BTextStyles}>
                  <span>SPORT</span>
                  <span>Cashback</span>
               </div>
            </button>
            <button className={styles.bannersButtonsElement2}>
               <img style={{position: 'absolute', top: '0', left: '0'}} src="/home/btbg2.png" alt="" />
               <div style={BImgStyles}></div>
               <div style={BTextStyles}>
                  <span>Slots</span>
                  <span>Cashback</span>
               </div>
            </button>
            <button className={styles.bannersButtonsElement}>
               <img style={{position: 'absolute', top: '0', left: '0'}} src="/home/btbg1.png" alt="" />
               <div style={BImgStyles}></div>
               <div style={BTextStyles}>
                  <span>Live</span>
                  <span>Cashback</span>
               </div>
            </button>
            <button className={styles.bannersButtonsElement2}>
               <img style={{position: 'absolute', top: '0', left: '0'}} src="/home/btbg2.png" alt="" />
               <div style={BImgStyles}></div>
               <div style={BTextStyles}>
                  <span>Bonus</span>
                  <span>Cashback</span>
               </div>
            </button>

         </div>
         <div className={styles.bannersCrypto}>
            <div style={{display: 'flex', gap: '12px'}}>
               12
               <div style={{display: 'flex', fontWeight: '500', fontSize: '14px', lineHeight: '140%', width: '73px'}}>
                  Crypto currencies
               </div>
            </div>
            <div style={{display: 'flex', gap: '12px'}}>
               55
               <div style={{display: 'flex', fontWeight: '500', fontSize: '14px', lineHeight: '140%', width: '73px'}}>
                  Crypto networks
               </div>
            </div>
            <div style={{height: '100%',width: '2px',opacity: '0.24',background: '#22243F'}}></div>
            <BitcoinSvg />
            <EthereumSvg />
            <BinanceSvg />
            <TronSvg />
            <TetherSvg />
            <SolanaSvg />
            <div style={{height: '100%',width: '2px',opacity: '0.24',background: '#22243F'}}></div>
            <span style={{fontSize: '14px', cursor: 'pointer'}}>Show All</span>
         </div>
      </div>
      </>
 )
}

export default HomeBunners