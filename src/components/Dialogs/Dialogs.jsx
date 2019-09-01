import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

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
};
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <Dialog name="Anton" id="1" />
                <Dialog name="Sasha" id="2" />
                <Dialog name="Valera" id="3" />
                <Dialog name="Yra" id="4" />
                <Dialog name="Sergey" id="5" />
            </div>
            <div className={s.messages}>
                <Message message = "Hello!"/>
                <Message message = "Hi!"/>
            </div>
        </div>
    );
};

export default Dialogs;