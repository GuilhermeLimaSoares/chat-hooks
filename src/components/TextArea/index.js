import React, { useState, useEffect } from "react";

import './styles.scss';

export default function TextArea(){
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    function handleMessages(message) {
        let newMessages = messages;
        newMessages.push(message);
    
        setMessages(newMessages);
        console.log(messages)
      }

    return (
    <div className="textarea">
        <form className="textarea__form" onSubmit={(event) => {
            handleMessages(text);
            event.preventDefault();
            }}>
            <label className="textarea__label">
            <textarea className="textarea__textarea" value={text} placeholder="Aa" onChange={(event) => {
                console.log(event.target.value)
                setText(event.target.value);
            }} />
            </label>
            <input className="textarea__input" type="submit" value="Enviar" />
        </form>
    </div>)

}