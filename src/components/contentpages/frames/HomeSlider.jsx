import styles from './HomeSlider.module.css'
import React, { useState, useEffect } from 'react';



const HomeSlider = ({text, images}) => {
    const [pos, setPos] = useState(0);
    const [clicks, setClicks] = useState(0);
    const [total, setTotal] = useState(0);
    const sliderClassName = `SliderStyle-${text.replace(/\s+/g, '')}`;
    useEffect(() => {
        const slider = document.querySelector(`.${sliderClassName}`);
        if (slider) {
          const totalItems = slider.children.length;
          setTotal(totalItems - 7);
        }
      }, [sliderClassName]);

    const handleClickLeft = () => {
        if (clicks != 0) {
          setPos((prevPos) => prevPos + 177);
          setClicks((prevClicks) => prevClicks - 1);
        }
    }
    
    const handleClickRight = () => {
        if (clicks < total) {
            setPos((prevPos) => prevPos - 177);
            setClicks((prevClicks) => prevClicks + 1);
        }
    }

    let BSLeft={
        display: 'flex',
        width: '32px',
        height: '32px',
        padding: '4px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        flexShrink: 0,
        borderRadius: '20px',
        opacity: clicks === 0 ? 0.5 : 1,
        background: 'radial-gradient(155.2% 155.87% at 31.94% -11.82%, #9186FF 0%, #6D61FF 33.87%, #574AFF 91.62%)',
        boxShadow: '0px 8px 12px 0px rgba(0, 0, 0, 0.02)',
    };
    let BSRight={
        display: 'flex',
        width: '32px',
        height: '32px',
        padding: '4px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        flexShrink: 0,
        borderRadius: '20px',
        opacity: clicks != total ? 1 : 0.5,
        background: 'radial-gradient(155.2% 155.87% at 31.94% -11.82%, #9186FF 0%, #6D61FF 33.87%, #574AFF 91.62%)',
        boxShadow: '0px 8px 12px 0px rgba(0, 0, 0, 0.02)',
    };

    let SliderStyle={
        position: 'absolute',
        display: 'flex',
        bottom: '0',
        left: `${pos}px`,
        height: '212px',
        gap: '16px',
        transition: 'left 0.3s ease'

    };

    return (
        <div className={styles.frame}>
            <div style={{position: 'absolute',left: '0', top: '6px'}}>{text}</div>
            <div className={styles.framePanel}>
                <button className={styles.framePanelButton}>
                    View All
                    <div style={{
                        fontSize: '10px', 
                        letterSpacing: '0.1px', 
                        fontWeight: '600', 
                        padding: '0 4px',
                        background: 'rgba(255, 255, 255, 0.20)',
                        borderRadius: '12px'
                    }}>{total+7}</div>
                </button>
                <button onClick={handleClickLeft} style={BSLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.8656 15.9064C13.1479 16.1645 13.6021 16.1645 13.8844 15.9064C14.1719 15.6436 14.1719 15.2135 13.8844 14.9507L10.6571 12L13.8844 9.04929C14.1719 8.78649 14.1719 8.35637 13.8844 8.09356C13.6021 7.83548 13.1479 7.83548 12.8656 8.09356L9.11558 11.5221C8.82814 11.7849 8.82814 12.2151 9.11558 12.4779L12.8656 15.9064Z" fill="white" stroke="white" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button onClick={handleClickRight} style={BSRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.1344 8.09356C10.8521 7.83548 10.3979 7.83548 10.1156 8.09356C9.82814 8.35637 9.82814 8.78649 10.1156 9.04929L13.3429 12L10.1156 14.9507C9.82814 15.2135 9.82814 15.6436 10.1156 15.9064C10.3979 16.1645 10.8521 16.1645 11.1344 15.9064L14.8844 12.4779C15.1719 12.2151 15.1719 11.7849 14.8844 11.5221L11.1344 8.09356Z" fill="white" stroke="white" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className={styles.frameSlider}>
                <div className={sliderClassName} style={SliderStyle}>
                    {images}
                </div>
            </div>
        </div>
    )
}

export default HomeSlider