import React, { useState } from 'react';
import CardsSvg from '../svg/CardsSvg';
import BallSvg from '../svg/BallSvg';

const ToggleButton = ({casinoOrSport, toggleCasinoOrSport}) => {
    
    let BStyles = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '240px',
        height: '100%',
        backgroundColor: '#171E2F',
        borderRadius: '20px',
        justifyContent: 'space-eval',
        cursor: 'pointer',
        userSelect: 'none'
        
      };

    let BToggleStyles = {
        display: 'flex',
        alignItems: 'center',
        width: '50%',
        height: '100%',
        backgroundColor: '#1C2438',
        backgroundImage: "url('src/ui/frames/header/buttons/backdrop.png')",
        backgroundSize: 'cover',
        borderRadius: '20px',
        marginLeft: casinoOrSport ? '50%' : '0%'
    };

    let BTextStyles = {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        borderRadius: '20px', 
    };
    
    let BTextContentStylesC = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
        gap: '16px',
        color: casinoOrSport ? '#576081' : '#F5F8FF',
        fontFamily: "'Rubik', 'sans-serif'",
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '20px', /* 142.857% */
    };
    let BTextContentStylesS = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
        gap: '16px',
        color: casinoOrSport ? '#F5F8FF' : '#576081',
        fontFamily: "'Rubik', 'sans-serif'",
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '20px', /* 142.857% */
    };
    

    
 return (
    <div style={BStyles} onClick={toggleCasinoOrSport}>
        <div style={BToggleStyles}></div>
        <div style={BTextStyles}>
            <div style={BTextContentStylesC}>
                <CardsSvg coll = {casinoOrSport ? '#576081' : '#F5F8FF'}/>
                Casino
                </div>
            <div style={BTextContentStylesS}>
                <BallSvg coll = {casinoOrSport ? '#F5F8FF' : '#576081'}/>
                Sports
            </div>
        </div>
    </div>
)
}

export default ToggleButton