import React, { useState, useEffect } from "react";

import ChatService from './../../service/chat-service';
import MessageService from './../../service/message-service';

import './styles.scss';
import './../../App.scss';

export default function Message(props) {
    const [chat, setChat] = useState([]);
    const [messages, setMessages] = useState([]);

    const chatService = new ChatService();
    const messageService = new MessageService();

    const getChat =  chatService.getChat();
    const getMessages =  messageService.getMessages();

    useEffect(() => {
        handleChat();
        handleMessages();
      }, [chat]);

      useEffect(() => {
        // handleMessages()

      }, []);

      function handleChat() {
        getChat.then((chat) => {
            setChat(chat);
        })
      }

      function handleMessages() {
          let currentUserMessages;
       getMessages.then((messages) => {
            currentUserMessages = currentMessages(messages, chat.id)
        }).then(() => {
            setMessages({conversations: currentUserMessages});
        });
        
      }

      function currentMessages(messages, currentChat){
           if (messages.length > 0){
            return messages.filter(data => data.idUser === currentChat);
          }
      }

    return (
        <div className={((props.deviceWidth) ? (`message ${props.disable.message ? '' : 'container--disable'}`) : 'message')}>

            {(!!messages.conversations) && messages.conversations.map((message) => 
               
                    <p key={`message-${message.id}`} className={`message__text-area ${message.type === 'worker' ? 'position-right' : ''}`}>
                        <span className="message__text">{message.message}</span>
                    </p>
            )}  
        </div>
        )
}

