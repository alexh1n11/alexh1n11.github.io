import React, { useState } from 'react';
import TaskSvg from './svg/TaskSvg';

const TaskButton = ({
  onClick,
  flag,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const TaskSvgComponent = flag ? <TaskSvg styles={{position: 'absolute',left: '-35px', minWidth: '110px', minHeight: '110px',}} /> :
   <TaskSvg styles={{position: 'absolute', left: '-29px'}} />;
  
  let BStyles = {
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '28.94737%',
    backgroundColor: '#1C2438',
    borderRadius: '20px',
    backgroundImage: "url('/frames/sidebar/backdrop.svg')",
    backgroundSize: 'cover',
    justifyContent: 'space-between'
  };

  let BTStyles = {
    textWrap: 'nowrap',
    overflow: 'hidden',
    marginLeft: '24.16667%',
    color: '#F5F8FF',
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "'Rubik', sans-serif",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '20px', /* 142.857% */
    letterSpacing: '0.1px',
    textTransform: 'capitalize',
  };

  let BNStyles = {
    marginRight: '14px',
    display: 'flex',
    padding: '0px 6px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '8px',
    background: '#E73B3B',
    color: 'rgba(255, 255, 255, 0.98)',
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "'Inter', sans-serif",
    fontSize: '11px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '16px', /* 145.455% */
    letterSpacing: '-0.242px',
  };

  if (flag) {
    BStyles.width = '40px';
    BStyles.height = '40px';
    BTStyles.width = '10px';
    BNStyles.position = 'absolute',
    BNStyles.left = '23px',
    BNStyles.bottom = '30px',
    BNStyles.overflow = 'visible'
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
      alignItems: 'center',
      }}>
      {TaskSvgComponent}
    </div>
      <div style={BTStyles}>Task Hub</div>
      <div style={BNStyles}>10</div>
      
    </button>
  
  );
};

export default TaskButton;
