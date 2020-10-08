import React, { useState, useEffect } from "react";

import ChatService from './../../service/chat-service';
import UserService from './../../service/users-service';

import './styles.scss';

export default function SideBar(props){
    let [users, setUsers] = useState([]);
    let service = new ChatService();
    let userService = new UserService();

    const getMessages =  userService.getUsers();

    useEffect(() => {
        getUserService();
    }, [users]);

    function getUserService() {
        getMessages.then((user) => {
            setUsers(user);
        })
    }

    return(
        <div className={((props.deviceWidth) 
            ? (`sidebar ${props.disable.sideBar 
            ? '' 
            : 'container--disable'}`) 
            : 'sidebar')}>

            <span className="sidebar__title">
                Últimos Registros
            </span>
            {
                users.map((data) => {
                    return <span className="sidebar__user-name" key={data.id} onClick={() => 
                        { 
                        service.postChat(data);
                        props.isOpenMessage();
                    }
                    }>{data.userName}</span>
                })
            }
                 
        </div>
        )
}