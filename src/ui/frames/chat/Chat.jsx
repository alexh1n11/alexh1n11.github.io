import React, { useState, useEffect } from 'react'
import styles from './Chat.module.css'
import CollapseButton from './buttons/CollapseButton'
import ChatPanel from './frames/ChatPanel'
import MessageButton from './buttons/MessageButton'

const Chat = ({handleWidgetCollapse,rootWidth}) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const handleCollapseClick = () => {
        setIsButtonClicked((prevState) => !prevState);
        if (handleWidgetCollapse) {
            handleWidgetCollapse();
        }
      };

    const [collapseVisible, setCollapseVisible] = useState(true);

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
        if (isButtonClicked) {
            setCollapseVisible(false);
        } else {
            setCollapseVisible(true);
        }
        return () => {
          window.removeEventListener('resize', handleResize1440);
        };
      }, [rootWidth]);
    return (
        <>
            <div className={isButtonClicked ? styles.chatCollapsed : styles.chat}>
                <div className={isButtonClicked ? styles.textAndButtonCollapsed : styles.textAndButton}>
                    <CollapseButton onClick={handleCollapseClick} collapseVisible={collapseVisible}/>
                    <div className={isButtonClicked ? styles.collapsed : styles.text}>Chat</div>         
                </div>
                <div className={isButtonClicked ? styles.collapsed : styles.online}>
                    1222 online
                    <div style={{width: '10px', height: '10px', borderRadius:'50%', background: '#2AC27B', filter: 'drop-shadow(0px 0px 12px rgba(62, 253, 15, 0.24))'}}></div>
                </div>
                <ChatPanel flag={isButtonClicked}/>

                <div style={{
                    display: isButtonClicked ? 'none': 'flex',
                    position: 'absolute',
                    left: '20px',
                    bottom: '20px',
                    width: '88.23529%',
                    height: '40px',        
                    borderRadius: '20px',
                }}>
                    <input id='ChatInput' type="text" placeholder="Send a message" style={{
                        height: '100%',
                        width: '83.33333%',
                        background: '#171E2F',
                        borderRadius: '20px',
                        padding: '16px' 
                    }} />
                    <MessageButton />
                </div>
            </div>
        </>
    )
}

export default Chat