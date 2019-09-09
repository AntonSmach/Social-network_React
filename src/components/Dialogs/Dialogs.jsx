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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialog name="Valera" id="3" />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    );
};

export default Dialogs;