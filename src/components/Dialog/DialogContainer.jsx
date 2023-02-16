import React from "react";
import {onMessageChangeActionCreator, sendMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";


let mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = dispatch => {
    return {
        sendMessage: () => {
            dispatch(sendMessageChangeActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer

