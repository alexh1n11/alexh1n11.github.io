import React from 'react';

const SearchSvg = ({ styles, coll }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.58476 17.5C13.957 17.5 17.5014 13.9555 17.5014 9.58329C17.5014 5.21104 13.957 1.66663 9.58476 1.66663C5.2125 1.66663 1.66809 5.21104 1.66809 9.58329C1.66809 13.9555 5.2125 17.5 9.58476 17.5Z" stroke={coll} strokeWidth="1.16796" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.3329 18.3335L16.666 16.6666" stroke={coll} strokeWidth="1.16796" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default SearchSvg;
