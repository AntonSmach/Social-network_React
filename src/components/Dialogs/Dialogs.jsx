import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    );
}
    ;
const Dialogs = () => {

    let dialogsData = [
        { id: "1", name: "Anton", },
        { id: "2", name: "Sasha", },
        { id: "3", name: "Valera", },
    ];

    let messagesData = [
        { message: "Hi" },
        { message: "Yo" },
    ];

    let dialogElements = dialogsData.map( d => (<Dialog name={d.name} id={d.id} />) );
    let messageElements = messagesData.map( m => (<Message message={m.message} />));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
               {dialogElements} 
            </div>
            <div className={s.messages}>
            {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;