import React, { Component } from 'react';

const axios = require('axios');

export default class ChatService extends Component {

    constructor(props){
        super(props);
        this.getChat = this.getChat.bind(this);
        this.postChat = this.postChat.bind(this);
    }


     getChat() { 
        return axios.get('http://localhost:3004/chat')
        .then(function (response) {
      
            // handle success
            // debugger;
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

     postChat(data){
        console.log('posttt',data)
        axios.post('http://localhost:3004/chat',  {
          id: `${data.id}`,
          userName: `${data.userName}`
        })
          .then(function (response) {
           
            console.log('inserido chat', response);

          })
          .catch(function (error) {
            console.log(error);
          });
    }
}