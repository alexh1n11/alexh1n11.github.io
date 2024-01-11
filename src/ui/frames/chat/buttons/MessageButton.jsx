import React from 'react';

const MessageButton = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 52 50" fill="none">
      <g filter="url(#filter0_d_404_1638)">
        <circle cx="32" cy="24" r="20" fill="url(#paint0_radial_404_1638)"/>
      </g>
      <path d="M34.1585 21.2693L30.745 26.0478C30.6651 26.1597 30.651 26.3059 30.7081 26.431L33.0785 31.6272C33.291 32.1102 33.9868 32.0778 34.1537 31.5772L39.0492 16.8936C39.1996 16.4427 38.7706 16.0137 38.3196 16.164L23.636 21.0596C23.1354 21.2265 23.1031 21.9223 23.586 22.1347L28.7823 24.5052C28.9074 24.5622 29.0535 24.5481 29.1654 24.4682L33.9439 21.0547C34.013 21.0054 34.1091 21.0214 34.1585 21.0905C34.1967 21.144 34.1967 21.2158 34.1585 21.2693Z" fill="white"/>
      <defs>
        <filter id="filter0_d_404_1638" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="8"/>
          <feGaussianBlur stdDeviation="6"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_404_1638"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_404_1638" result="shape"/>
        </filter>
        <radialGradient id="paint0_radial_404_1638" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.7778 -0.727275) rotate(84.9739) scale(62.3479 55.7149)">
          <stop stopColor="#9186FF"/>
          <stop offset="0.338694" stopColor="#6D61FF"/>
          <stop offset="0.916248" stopColor="#574AFF"/>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default MessageButton;
