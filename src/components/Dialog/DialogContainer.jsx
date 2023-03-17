import React from "react";
import {sendMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirerect";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMassageBody) => {
            dispatch(sendMessageChangeActionCreator(newMassageBody))
        },
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialog)

