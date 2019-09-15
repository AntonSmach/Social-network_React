import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {

    let dialogsData = [
        { id: "1", name: "Anton", },
        { id: "2", name: "Sasha", },
        { id: "3", name: "Valera", },
    ];

    let messagesData = [
        { message: "Hi" },
        { message: "Yo" },
    ];

    let dialogElements = props.state.dialogsData.map(dialog => {
        return (<DialogItem name={dialog.name} id={dialog.id} />);
    });

    let messageElements = props.state.messagesData.map(m => (<Message message={m.message} />));

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