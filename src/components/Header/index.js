import React, { useState, useEffect } from "react";

import ChatService from './../../service/chat-service';

import './styles.scss';

export default function Header(props){
    const [chat, setChat] = useState([]);

    const chatService = new ChatService();

    const getChat =  chatService.getChat();

    useEffect(() => {
        handleChat();
      }, [chat]);

      function handleChat() {
        getChat.then((chat) => {
            setChat(chat);
        })
      }


    return(<div className="header">

        { props.isMobile ?
            <button className="header__btn-back" 
                    onClick={() => props.isOpenMessage()}>
            </button> 
            : ''
        }

        <form className="search__area">
            <input type="text" 
                    className="search__input" 
                    placeholder="Buscar..."/>
                    
            <button className="search__btn" alt="Buscar"/>
        </form>
        
        { props.isMobile ? '' : <span className="header__user-name">{chat.userName}</span>}
    </div>)
}