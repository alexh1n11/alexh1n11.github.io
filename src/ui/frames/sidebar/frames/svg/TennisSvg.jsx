import React from 'react';

const TennisSvg = ({ styles, coll }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.3002 13.5216C16.6736 14.1436 15.903 14.5897 15.0618 14.8175L6.5892 6.07894C6.80973 5.21186 7.24177 4.41738 7.84423 3.77108C10.8987 0.645005 14.8311 -0.174697 17.9905 3.08245C21.1286 6.31757 20.3557 10.3944 17.3002 13.5216ZM6.36464 9.53141C6.52545 10.3001 6.51641 11.0963 6.3382 11.8609C6.18128 12.4136 5.94124 12.9374 5.62684 13.4133C4.18347 15.161 2.55176 16.1099 2.55176 16.7369C3.01184 17.7278 3.78707 18.5265 4.7485 19C5.35446 19 6.25381 17.3823 7.99092 15.8508C8.46347 15.4904 8.99474 15.2202 9.55961 15.0527C10.2645 14.9068 10.991 14.9123 11.6937 15.0688L6.36464 9.53141Z" fill={coll}/>
      <path d="M2.22862 13.1459C3.45945 13.1459 4.45724 12.1171 4.45724 10.8481C4.45724 9.57904 3.45945 8.55029 2.22862 8.55029C0.997786 8.55029 0 9.57904 0 10.8481C0 12.1171 0.997786 13.1459 2.22862 13.1459Z" fill={coll}/>
    </svg>
  );
};

export default TennisSvg;
