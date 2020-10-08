import React, { Component } from 'react';

const axios = require('axios');

export default class UserService extends Component {

    constructor(props){
        super(props);
        this.getUsers = this.getUsers.bind(this);
        this.postUserst = this.postUsers.bind(this);
    }


     getUsers() { 
        return axios.get('http://localhost:3004/users')
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

     postUsers(data){

        axios.post('http://localhost:3004/users',  {
          id: `${data.id}`,
          userName: `${data.userName}`
        })
          .then(function (response) {

          })
          .catch(function (error) {

          });
    }
}