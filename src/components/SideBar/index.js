import React from 'react';

import './styles.scss';

const mock = ['jose', 'maria', 'uilçherme', 'Paulo', 'juliana', 'Carlos', 'mariana', 'Sueli', 'Bahia']

export default function SideBar(props){
    return(
        <div className="sidebar">
            {
                mock.map((name) => {
                    return <span className="sidebar__user-name">{name}</span>
                })
            }
            
            
        </div>
        )
}