import React, { useState, useEffect } from "react";

import ChatService from './../../service/chat-service';
import MessageService from './../../service/message-service';

import './styles.scss';

export default function TextArea(){
    const [chat, setChat] = useState([]);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    const chatService = new ChatService();
    const messageService = new MessageService();

    const getChat =  chatService.getChat();
    const getMessages =  messageService.getMessages();

    useEffect(() => {
        handleChat();
        handleMessages();
      }, [chat]);

    function handleChat() {
        getChat.then((chat) => {
            setChat(chat);
        })
    }

    function handleMessages() {
        getMessages.then((message) => {
             setMessages({conversations: message});
         });
         
       }

    function postMessage(id, message, texto){
        messageService.postMessages(id, message, texto);
    }

    return (
    <div className="textarea">
        <form className="textarea__form" onSubmit={(event) => {
            event.preventDefault();
            postMessage(chat, messages, text);
            
            }}>
            <label className="textarea__label">
            <textarea className="textarea__textarea" value={text} placeholder="Digite sua mensagem" onChange={(event) => {
                console.log(event.target.value)
                setText(event.target.value);
            }} />
            </label>
            <input className="textarea__input" type="submit" value="Enviar" />
        </form>
    </div>)

}