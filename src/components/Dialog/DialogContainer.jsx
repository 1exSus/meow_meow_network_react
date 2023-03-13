import React from "react";
import {onMessageChangeActionCreator, sendMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirerect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageChangeActionCreator())
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialog)

