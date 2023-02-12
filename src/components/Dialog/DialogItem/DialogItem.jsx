import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let patch = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={patch} className={s.dialog}  style={({isActive}) => ({color: isActive ? 'red' : 'blueviolet'})}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem

