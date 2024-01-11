import React, { useState } from 'react';
import WheelSvg from './svg/WheelSvg';

const WheelButton = ({
    onClick,
    flag,
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const TaskSvgComponent = flag ? <WheelSvg stylesdiv={{position: 'absolute', left: '-40px', width: '120px', height: '120px'}} /> :
     <WheelSvg stylesdiv={{position: 'absolute', left: '-34.78261%', width: '104.34783%'}} />;
    
    let BStyles = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row-reverse',
      alignContent: 'center',
      alignItems: 'center',
      width: '47.91667%',
      height: '100%',
      borderRadius: '20px',
      background: 'radial-gradient(304.41% 161.99% at 78.7% -50%, #2D4D74 0%, #33507A 26.04%, #253970 77.08%, #1F2F60 100%)'
    };
  
    let BTStyles = {
      overflow: 'hidden',
      color: '#F5F8FF',
      fontFamily: "'Rubik', sans-serif",
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      marginRight: '13.65217%',
      width: '48px'
    };
  
  
    if (flag) {
      BStyles.width = '40px';
      BStyles.height = '40px';
      BTStyles.width = '0';
    };
  
    const handleClick = (event) => {
      setIsClicked((prevIsClicked) => !prevIsClicked);
      if (onClick) {
        onClick(event);
      }
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <button
        style={BStyles}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      <div style = {{
        width: '100%',
        height: '100%',
        borderRadius: '20px', 
        overflow: 'hidden',
        position: 'absolute', 
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center'
        }}>
        {TaskSvgComponent}
      </div >
        <div style={BTStyles}>WHEEL</div>
      </button>
    
    );
  };

export default WheelButton