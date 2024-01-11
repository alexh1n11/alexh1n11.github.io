import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router';
import './assets/styles/global.css';

const Main = () => {
  const [rootWidth, setRootWidth] = useState(0);

  useEffect(() => {
    const handleWidth = () => {
      const width = document.getElementById('root').getBoundingClientRect().width;
      setRootWidth(width);
    };
    handleWidth();
    window.removeEventListener('resize', handleWidth);
  }, []);

  return (
      
    <Router rootWidth={rootWidth} />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
