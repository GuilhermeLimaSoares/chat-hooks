import React from 'react';

import Header from './components/Header';
import Message from './components/Message';
import SideBar from './components/SideBar';
import TextArea from './components/TextArea';

import './App.scss';


function App() {
  return (
    <div className="container">
        <Header />
        <SideBar />
        <Message />
        <TextArea/>

     
    </div>
  );
}

export default App;
