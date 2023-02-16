import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";


let mapStateToProps = (state) => {
    return {
        post: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(onPostChangeActionCreator(text))
        }
    }
}
const  MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer

