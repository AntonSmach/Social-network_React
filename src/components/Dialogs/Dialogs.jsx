import React from 'react';
import s from './Dialogs.module.css';
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog}>
                    Anton
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Yra
                </div>
                <div className={s.dialog}>
                    Sergey
                </div>
            </div>
        </div>
    );
};

export default Dialogs;