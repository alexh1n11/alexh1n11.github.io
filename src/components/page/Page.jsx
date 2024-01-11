import React, { useState, useCallback, useRef } from 'react';
import PageUseEffect from './PageUseEffect'
import styles from './Page.module.css';
import Sidebar from '../../ui/frames/sidebar/Sidebar';
import Chat from '../../ui/frames/chat/Chat';
import Header from '../../ui/frames/header/Header';
import Footer from '../../ui/frames/footer/Footer';
import ContentHome from '../contentpages/ContentHome';
import ContentCashback from '../contentpages/ContentCashback';
import RegisterPopUp from './registerPopUp';
import LoginPopUp from './LoginPopUp'

const Page = ({rootWidth}) => {
  const isFirstRun = useRef(true);
  const [registerClicked, setRegisterClicked] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const [userLogged, setUserLogged] = useState(false);
  const [casinoOrSport, setCasinoOrSport] = useState(false);
  const [scale, setScale] = useState(1);
  const [activeContent, setActiveContent] = useState('Home');
  const [widgetCollapse, setWidgetCollapse] = useState(false);
  const handleWidgetCollapse = () => {
    setWidgetCollapse(!widgetCollapse);
  };
  const handleContentChange = useCallback((contentId) => {
    setActiveContent(contentId);
  }, []);

  PageUseEffect(isFirstRun, widgetCollapse, setScale);

  const toggleCasinoOrSport = useCallback(() => {
    setCasinoOrSport((prevState) => !prevState);
  }, []);

  const renderActiveContent = useCallback(() => {
    switch (activeContent) {
      case 'Home':
        return <ContentHome scale = {scale}/>;
      case 'Cashback':
        return <ContentCashback />;
      default:
        return <ContentHome />;
    }
  }, [activeContent]);
  

  return (
    <div className={styles.page}>
      <Sidebar casinoOrSport={casinoOrSport} setActiveContent={handleContentChange} rootWidth={rootWidth} handleWidgetCollapse={handleWidgetCollapse}/>
      <div className={styles.workzone} style={{ zoom: scale}}>

        {registerClicked ? <RegisterPopUp registerClicked ={registerClicked} setRegisterClicked ={setRegisterClicked} loginClicked ={loginClicked} setLoginClicked ={setLoginClicked}/> : null}
        
        {loginClicked ? <LoginPopUp loginClicked ={loginClicked} setLoginClicked ={setLoginClicked} registerClicked ={registerClicked} setRegisterClicked ={setRegisterClicked} userLogged= {userLogged} setUserLogged = {setUserLogged}/> : null}
        
        <Header casinoOrSport={casinoOrSport} toggleCasinoOrSport={toggleCasinoOrSport} userLogged={userLogged} 
        registerClicked ={registerClicked} setRegisterClicked ={setRegisterClicked} loginClicked ={loginClicked} setLoginClicked ={setLoginClicked}/>

        {renderActiveContent()}
        <Footer />

      </div>
      <Chat handleWidgetCollapse={handleWidgetCollapse} rootWidth={rootWidth} />
    </div>
  );
};


export default Page;
