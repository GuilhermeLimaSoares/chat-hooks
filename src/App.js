import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Message from './components/Message';
import SideBar from './components/SideBar';
import TextArea from './components/TextArea';

import './App.scss';


function App() {
  const [disableComponents, setDisableComponents] = useState({sideBar: true, 
    message: false, 
    textArea: false});

  const [isOpenMessage, setIsOpenMessage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getDeviceVersion();
    disableComponent(false);
  }, []);

  useEffect(() => {
    getDeviceVersion();
  }, [isMobile]);

  function getDeviceVersion(){
    var windowWidth = window.innerWidth;
    const isDesktop = windowWidth > 901 ? true : false;

    setIsMobile(!isDesktop);

    console.log("tamanho da tela:", windowWidth, isDesktop, isMobile);
  }

  function disableComponent(isDisable){
      setDisableComponents(
        {
          sideBar: !isDisable, 
          message: isDisable, 
          textArea: isDisable
        }
      ) 
      
      console.log('habilitado:', disableComponents);
  }

  function openMessage(){

    let newStateComponent = {
      sideBar: !disableComponents["sideBar"], 
      message: !disableComponents["message"], 
      textArea: !disableComponents["textArea"]
    }

    setDisableComponents(newStateComponent);
  }

  return (
    <div className="container">
        <Header isMobile={isMobile} isOpenMessage={openMessage}/>
        <SideBar disable={disableComponents} deviceWidth={isMobile} disableComponent={disableComponent} isOpenMessage={openMessage} />
        <Message disable={disableComponents} deviceWidth={isMobile} />
        <TextArea disable={disableComponents} deviceWidth={isMobile}/>

     
    </div>
  );
}

export default App;
