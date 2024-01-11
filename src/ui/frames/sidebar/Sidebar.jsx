import React, { useState, useEffect } from 'react'
import styles from './Sidebar.module.css'
import CollapseButton from './buttons/CollapseButton'
import TaskButton from './buttons/TaskButton'
import BonusButton from './buttons/BonusButton'
import CashBackButton from './buttons/CashBackButton'
import WheelButton from './buttons/WheelButton'
import SidebarListCasino from './frames/SidebarListCasino'
import SidebarListSports from './frames/SidebarListSports'
import SidebarSettings from './frames/SidebarSettings'
import RankSvg from './svg/RankSvg'
import BallSvg from './svg/BallSvg'
import BonusSvg from './svg/BonusSvg'
import CasinoSvg from './svg/CasinoSvg'

const Sidebar = ({casinoOrSport, setActiveContent, rootWidth, handleWidgetCollapse}) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const handleCollapseClick = () => {
        setIsButtonClicked((prevState) => !prevState);
        if (handleWidgetCollapse) {
            handleWidgetCollapse();
        }
      };

    const handleClick = (contentId) => {
        setActiveContent(contentId);
    };

    const elemStyles = {display: 'flex', width: '100%', alignItems: 'center', gap: '12px', cursor:'pointer'};
    const elemStyles2 = {display: 'flex', alignItems: 'center', gap: '12px', cursor:'pointer'};

    useEffect(() => {
        const handleResize1440 = () => {
          if (window.innerWidth <= 1440) {
            setIsButtonClicked(true);
          } else {
            setIsButtonClicked(false);
          }
        };
        handleResize1440()
        window.addEventListener('resize', handleResize1440);
        return () => {
          window.removeEventListener('resize', handleResize1440);
        };
      }, [rootWidth]);

    return (
        <>
            <div className={isButtonClicked ? styles.sidebarCollapsed : styles.sidebar}>

                <div className={isButtonClicked ? styles.logo_and_buttonCollapsed : styles.logo_and_button}>
                            <div className={isButtonClicked ? styles.logoCollapsed : styles.logo} onClick={() => handleClick('Home')} style={{cursor: 'pointer'}}>
                                <img src="/frames/sidebar/logo.png" alt="" className={styles.logoimg}/>
                                <div className={isButtonClicked ? styles.textCollapsed : styles.text}>betstorm</div>
                            </div>
                            {window.innerWidth > 1440 && <CollapseButton onClick={handleCollapseClick} />}

                </div>

                
                <div className={isButtonClicked ? styles.control_panelCollapsed : styles.control_panel}>
                        
                    <TaskButton flag = {isButtonClicked}/>
                    <BonusButton flag = {isButtonClicked} />
                    <div className={isButtonClicked ? styles.cardsCollapsed : styles.cards}>
                        <CashBackButton flag = {isButtonClicked} onClick={() => handleClick('Cashback')} />
                        <WheelButton flag = {isButtonClicked} />
                    </div>
                </div>
                <div className={styles.content} style={{ height: isButtonClicked ? '72%' : '54.07407%' }}>
                    {casinoOrSport ? (<SidebarListSports flag ={isButtonClicked} setActiveContent={setActiveContent} elemStyles={elemStyles}/>) :
                    (<SidebarListCasino flag ={isButtonClicked} setActiveContent={setActiveContent} elemStyles={elemStyles}/>)}

                    <div style={isButtonClicked ? elemStyles2 : elemStyles} onClick={() => handleClick('Rank')}>
                        <RankSvg coll = '#576081'/>
                        {!isButtonClicked && (<>Rank System</>)} 
                    </div>
                    {!casinoOrSport ? (
                        <div style={isButtonClicked ? elemStyles2 : elemStyles} onClick={() => handleClick('Sport')}>
                            <BallSvg coll = '#576081'/>
                            {!isButtonClicked && (<>Sports</>)} 
                        </div>
                    ):(
                        <div style={isButtonClicked ? elemStyles2 : elemStyles} onClick={() => handleClick('Casino')}>
                            <CasinoSvg coll = '#576081'/>
                            {!isButtonClicked && (<>Casino</>)} 
                        </div>
                    )}
                    <div style={isButtonClicked ? elemStyles2 : elemStyles} onClick={() => handleClick('Rank')}>
                        <BonusSvg coll = '#576081'/>
                        {!isButtonClicked && (<>Bonus</>)} 
                    </div>
                    {casinoOrSport && !isButtonClicked && (
                        <div style={{display: 'flex',width: '100%', alignItems: 'center', gap: '8px', color: '#9CA3BD', marginTop: '6px'}}>
                            Live Events
                            <div style={{display: 'flex',padding: '2px 8px 2px 8px',color: '#FFF',borderRadius: '12px',background: 'rgba(255, 255, 255, 0.20)'}}>12</div>
                        </div>
                    )}
                    {casinoOrSport && !isButtonClicked && (
                        <div style={{display: 'flex',width: '100%', alignItems: 'center', gap: '8px', color: '#9CA3BD'}}>
                            Starting Soon
                            <div style={{display: 'flex',padding: '2px 8px 2px 8px',color: '#FFF',borderRadius: '12px',background: 'rgba(255, 255, 255, 0.20)'}}>2</div>
                        </div>
                    )}
                    {casinoOrSport && !isButtonClicked && (
                        <div style={{display: 'flex',width: '100%', alignItems: 'center', gap: '8px', color: '#9CA3BD'}}>
                            My Bets
                            <div style={{display: 'flex',padding: '2px 8px 2px 8px',color: '#FFF',borderRadius: '12px',background: 'rgba(255, 255, 255, 0.20)'}}>1222</div>
                        </div>
                    )}                   

                </div>
                <SidebarSettings flag={isButtonClicked} />
            </div>
        </>
    )
}

export default Sidebar