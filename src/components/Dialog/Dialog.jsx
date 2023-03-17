import React from "react";
import s from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useForm} from "react-hook-form";


const   Dialog = (props) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)

    let messageElements = props.dialogsPage.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>)


    const {
        register,
        handleSubmit,
        reset,
    } = useForm({

    })
    const onSubmit = (data) => {
        props.sendMessage(data.message)
        reset()
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <textarea placeholder={'enter yo masage'} {...register('message')}/>
                    </div>
                    <div>
                        <button>Send message</button>
                    </div>
                </form>

            </div>


        </div>
    )
}
export default Dialog

