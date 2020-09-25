import React, { Component } from 'react';

const axios = require('axios');

export default class MessageService extends Component {

    constructor(props){
        super(props);
        this.getMessages = this.getMessages.bind(this);
        this.postMessages = this.postMessages.bind(this);
    }


     getMessages() { 
        return axios.get('http://localhost:3004/conversations')
        .then(function (response) {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            return error;
        })
        .then(function (data) {
            // always executed
            return data;
        });
    }

     postMessages(chat, messages, text, type = "worker"){
        debugger;
        axios.post(`http://localhost:3004/conversations`,{
            "id": messages.conversations.length + 1,
            "idUser": chat.id,
            "type": type,
            "userName": `${chat.userName}`,
            "message": `${text}`
          })
          .then(function (response) {
           
            console.log('inserido', response);

          })
          .catch(function (error) {
            console.log(error);
          });
          
    }
}