import React, { useState, useEffect } from "react";

import ChatService from './../../service/chat-service';
import MessageService from './../../service/message-service';

import './styles.scss';

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
          return messages.filter(data => data.idUser === currentChat);
      }

    return (
        <div className="message">
{/* 
            {(!!messages.conversations) && messages.conversations[chat.id - 1].message.map((message) => 
               
                <div key={message.id}>
                    <p key={`${message.id}-userText`} className="message__text-area">
                        <span className="message__text">{message.userText.text}</span>
                    </p>

                    <p key={`${message.id}-myText`} className={"message__text-area position-right"}>
                        <span className="message__text">{message.myText.text}</span>
                    </p>
                </div>
            )}   */}
               

               
            {(!!messages.conversations) && messages.conversations.map((message) => 
               
                    <p key={`message-${message.id}`} className={`message__text-area ${message.type === 'worker' ? 'position-right' : ''}`}>
                        <span className="message__text">{message.message}</span>
                    </p>
            )}  
        </div>
        )
}

