import React from 'react';

import imageLupa from  './../../assets/lupa.png';

import './styles.scss';

export default function Header(props){
    return(<div className="header">
        <form className="search__area">
            <input type="text" className="search__input" placeholder="Buscar..."/>
            <button className="search__btn" alt="Buscar"/>
        </form>
    </div>)
}