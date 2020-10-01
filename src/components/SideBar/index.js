import React from 'react';

import ChatService from './../../service/chat-service';

import './styles.scss';

const mock = [
    {id: 1, userName: 'jose'}, 
    {id: 2, userName: 'maria'} , 
    {id: 3, userName: 'Guilherme'}, 
    {id: 4, userName: 'Paulo'}, 
    {id: 5, userName: 'juliana'}, 
    {id: 6, userName: 'Carlos'}, 
    {id: 7, userName: 'mariana'}, 
    {id: 8, userName: 'Sueli'}, 
    {id: 9, userName: 'Bahia'}
]

export default function SideBar(props){
    let service = new ChatService();
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
                mock.map((data) => {
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