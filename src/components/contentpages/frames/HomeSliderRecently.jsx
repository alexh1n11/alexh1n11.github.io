import styles from './HomeSlider.module.css'
import React, { useState, useEffect } from 'react';



const HomeSliderRecently = ({text}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const slider = document.querySelector('.SliderStyleRecently');
        if (slider) {
          const totalItems = slider.children.length;
          setTotal(totalItems);
        }
      }, []);

    let SliderStyleRecently={
        position: 'absolute',
        display: 'flex',
        bottom: '0',
        left: '0',
        height: '120px',
        gap: '20px',
        Transition: 'left 0.3s ease'

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
                    }}>{total}</div>
                </button>
            </div>
            <div className={styles.frameSlider2}>
                <div className="SliderStyleRecently" style={SliderStyleRecently}>
                    <button className={styles.SliderStyleRecentlButton}>
                        <img src="/frames/HomeSliderRecently/img.png" alt="" />
                    </button>
                    <button className={styles.SliderStyleRecentlButton}>
                        <img src="/frames/HomeSliderRecently/img.png" alt="" />
                    </button>
                    <button className={styles.SliderStyleRecentlButton}>
                        <img src="/frames/HomeSliderRecently/img.png" alt="" />
                    </button>
                    <button className={styles.SliderStyleRecentlButton}>
                        <img src="/frames/HomeSliderRecently/img.png" alt="" />
                    </button>
                    

                </div>
            </div>
        </div>
    )
}

export default HomeSliderRecently