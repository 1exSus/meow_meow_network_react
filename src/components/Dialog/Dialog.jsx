import React from "react";
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {onMessageChangeActionCreator, sendMessageChangeActionCreator} from "../../redux/dialogs-reducer";


const   Dialog = (props) => {

    let state = props.store.getState().dialogsPage


    let dialogsElement = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messageElements = state.messages.map(m => <Message id={m.id} message={m.message}/>)

    let newMessageElement = React.createRef()
    let sendMessage = () => {
        props.store.dispatch(sendMessageChangeActionCreator())
    }
    let onMessageChange = () =>{
        let text = newMessageElement.current.value
        props.store.dispatch(onMessageChangeActionCreator(text) )
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.nevMessageText}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>


        </div>
    )
}
export default Dialog

