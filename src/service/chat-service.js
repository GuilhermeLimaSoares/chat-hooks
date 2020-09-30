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
            return response.data;
        })
        .catch(function (error) {
            // handle error
            // return error;
            return {
              id: "1",
              userName: "jose"
            }
        })
        .then(function (data) {
            // always executed
            return data;
        });
    }

     postChat(data){

        axios.post('http://localhost:3004/chat',  {
          id: `${data.id}`,
          userName: `${data.userName}`
        })
          .then(function (response) {

          })
          .catch(function (error) {

          });
    }
}