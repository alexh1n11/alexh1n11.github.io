import React, { useState } from 'react';
import SearchSvg from "../svg/SearchSvg"

const SearchButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    let BStyles={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        borderRadius: '40px',
        background: '#171E2F',
    }
 return (
    <div>
        <button
        style={BStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>

            <SearchSvg coll={isHovered ? "#F5F8FF" : "#576081"}/>
        </button>
    </div>
    )
}

export default SearchButton