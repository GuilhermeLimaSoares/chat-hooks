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
            // return error;

            return [{
                id: 1,
                idUser: "1",
                type: "client",
                userName: "Jose",
                message: "Ola, boa noite"
              },
              {
                id: 2,
                idUser: "1",
                type: "worker",
                userName: "Jose",
                message: "Oie, tudo bem e contigo?"
              },
              {
                id: 3,
                idUser: "1",
                type: "client",
                userName: "Jose",
                message: "tenho uma duvida, poderria me ajudar?"
              },
              {
                id: 4,
                idUser: "1",
                type: "worker",
                userName: "Jose",
                message: "Claro, que sim"
              },
              {
                id: 5,
                idUser: "1",
                type: "worker",
                userName: "José",
                message: "batata"
              },
              {
                id: 6,
                idUser: "1",
                type: "worker",
                userName: "José",
                message: "carro"
              }]
        })
        .then(function (data) {
            // always executed
            return data;
        });
    }

     postMessages(chat, messages, text, type = "worker"){
        axios.post(`http://localhost:3004/conversations`,{
            "id": messages.conversations.length + 1,
            "idUser": chat.id,
            "type": type,
            "userName": `${chat.userName}`,
            "message": `${text}`
          })
          .then(function (response) {

          })
          .catch(function (error) {
            console.log(error);
          });
          
    }
}