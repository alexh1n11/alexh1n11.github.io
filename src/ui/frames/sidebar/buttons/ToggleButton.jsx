import React from 'react';
import Moon from '../buttons/svg/Moon'
import Sun from '../buttons/svg/Sun'
const ToggleButton = () => {
    
    let BStyles = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '80px',
        height: '40px',
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
        borderRadius: '40px',
        background: 'var(--1, radial-gradient(155.2% 155.87% at 31.94% -11.82%, #9186FF 0%, #6D61FF 33.87%, #574AFF 91.62%))',
        boxShadow: '0px 8px 12px 0px rgba(0, 0, 0, 0.02)',
        marginLeft: '0%'
        
    };

    
 return (
    <div style={BStyles}>
        <div style={BToggleStyles}></div>
        <div style={{width: '100%',height: '100%',position: 'absolute', display: 'flex', justifyContent: 'space-around',}}>
            <Moon />
            <Sun />
        </div>
    </div>
)
}

export default ToggleButton