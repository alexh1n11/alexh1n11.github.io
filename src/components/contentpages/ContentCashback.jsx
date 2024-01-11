import React, { useState, useEffect } from 'react';
import styles from './ContentCashback.module.css'
import WalletSvg from './src/Svg/WalletSvg'
import CashbackForRank from './frames/CashbackForRank'
import CashbackForRankMobile from './frames/CashbackForRankMobile'
const ContentCashback = () => {
   const [activeInputTable, setActiveInputTable] = useState(false);
   useEffect(() => {
      const handleResize390 = () => {
        if (window.innerWidth <= 390) {
         setActiveInputTable(true);
        } else {
         setActiveInputTable(false);
        }
      };
      handleResize390()
      window.addEventListener('resize', handleResize390);
      return () => {
        window.removeEventListener('resize', handleResize390);
      };
    }, []);

   return (
      <div className={styles.cashback}>
         <div className={styles.bgFrame}>
            <div className={styles.bgFrameContent}>
               <div className={styles.bgFrameContentText}>
                  The most generous Cashback <span className={styles.bgFrameContentText2}>in i-gaming</span>
               </div>
               <div className={styles.panel}>
                  <div className={styles.panelimgShadow}></div>
                  <div className={styles.panelimg}>
                     <WalletSvg />
                  </div>
                  <div className={styles.paneltext1}>The most frequent</div>
                  <div className={styles.paneltext2}>Get real cashback twice a week and play again</div>
               </div>
               <div className={styles.panel}>
                  <div className={styles.panelimgShadow}></div>
                  <div className={styles.panelimg}>
                     <WalletSvg />
                  </div>
                  <div className={styles.paneltext1}>The biggest payouts</div>
                  <div className={styles.paneltext2}>You can get up to 25% of your coins back</div>
               </div>
               <div className={styles.panel}>
               <div className={styles.panelimgShadow}></div>
                  <div className={styles.panelimg}>
                     <WalletSvg />
                  </div>
                  <div className={styles.paneltext1}>The simplest getting</div>
                  <div className={styles.paneltext2}>Withdraw cashback easy to account balance</div>
               </div>

            </div>
         </div>
         <div className={styles.frameInfo}>
            <div className={styles.info}>
               <div className={styles.info1}>How it Work?</div>
               <div className={styles.info2}>You play - PlayZen returns some lost coins back. This feature is available for everyone from the beginning of using the platform.</div>
            </div>
            <div className={styles.cardRow}>
               <div className={styles.card}>
                  <div className={styles.cardEnjoy}></div>
                  <div className={styles.cardtext11}>Enjoy gaming</div>
                  <div className={styles.cardtext12}>Play your favorite games and raise your cashback accordingly to the Rank.</div>
               </div>
               <div className={styles.card}>
                  <div className={styles.cardReceive}></div>
                  <div className={styles.cardtext21}>Receive coins</div>
                  <div className={styles.cardtext22}>Cashback is credited twice a week. The percent depends on users Rank - from 1% up to 25%.</div>
               </div>
               <div className={styles.card2}>
                  <div className={styles.cardWidthdraw}></div>
                  <div className={styles.cardtext31}>Withdraw cashback</div>
                  <div className={styles.cardtext32}>Withdraw your cashback immediately to account balance. And play for pleasure again!</div>
               </div>
            </div>
            <button className={styles.playButton}>Play Now</button>
         </div>

         {!activeInputTable ? <CashbackForRank /> : <CashbackForRankMobile />}

         <div className={styles.frameQuestions}>
            <button className={styles.questionsTab}>
               How to become a part of the VIP Club?
               <div className={styles.questionsTabArrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                     <path d="M1.1368 2.3493C0.821068 2.01778 0.821068 1.48222 1.1368 1.1507C1.45515 0.816432 1.97342 0.816432 2.29178 1.1507L6 5.04434L9.70823 1.1507C10.0266 0.816432 10.5448 0.816432 10.8632 1.1507C11.1789 1.48222 11.1789 2.01778 10.8632 2.3493L6.57749 6.8493C6.25914 7.18357 5.74086 7.18357 5.42251 6.8493L1.1368 2.3493Z" fill="#9CA3BD" stroke="#9CA3BD" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
            </button>
            <button className={styles.questionsTab}>
               I am a member and I haven’t received any bonus yet. Why? When are they sent to the users and how often?
               <div className={styles.questionsTabArrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                     <path d="M1.1368 2.3493C0.821068 2.01778 0.821068 1.48222 1.1368 1.1507C1.45515 0.816432 1.97342 0.816432 2.29178 1.1507L6 5.04434L9.70823 1.1507C10.0266 0.816432 10.5448 0.816432 10.8632 1.1507C11.1789 1.48222 11.1789 2.01778 10.8632 2.3493L6.57749 6.8493C6.25914 7.18357 5.74086 7.18357 5.42251 6.8493L1.1368 2.3493Z" fill="#9CA3BD" stroke="#9CA3BD" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
            </button>
            <button className={styles.questionsTab}>
               I want to become a part of the VIP Club, but I haven’t reached Rank 13. What should I do?
               <div className={styles.questionsTabArrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                     <path d="M1.1368 2.3493C0.821068 2.01778 0.821068 1.48222 1.1368 1.1507C1.45515 0.816432 1.97342 0.816432 2.29178 1.1507L6 5.04434L9.70823 1.1507C10.0266 0.816432 10.5448 0.816432 10.8632 1.1507C11.1789 1.48222 11.1789 2.01778 10.8632 2.3493L6.57749 6.8493C6.25914 7.18357 5.74086 7.18357 5.42251 6.8493L1.1368 2.3493Z" fill="#9CA3BD" stroke="#9CA3BD" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
            </button>
            <button className={styles.questionsTab}>
               What does affect the weekly/monthly bonus?
               <div className={styles.questionsTabArrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                     <path d="M1.1368 2.3493C0.821068 2.01778 0.821068 1.48222 1.1368 1.1507C1.45515 0.816432 1.97342 0.816432 2.29178 1.1507L6 5.04434L9.70823 1.1507C10.0266 0.816432 10.5448 0.816432 10.8632 1.1507C11.1789 1.48222 11.1789 2.01778 10.8632 2.3493L6.57749 6.8493C6.25914 7.18357 5.74086 7.18357 5.42251 6.8493L1.1368 2.3493Z" fill="#9CA3BD" stroke="#9CA3BD" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
            </button>
            
         </div>
         
         

      </div>
   )
}

export default ContentCashback