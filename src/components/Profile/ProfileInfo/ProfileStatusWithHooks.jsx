import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {
                editMode
                    ? <input onBlur={deactivateEditMode} autoFocus={true} onChange={onStatusChange} value={status}></input>
                    : <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
            }
        </div>
    )
}

export default ProfileStatusWithHooks

