import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text))
    }

    return ( <MyPosts addPost={addPost} onPostChange={onPostChange} post={state.profilePage.post} newPostText={state.profilePage.newPostText} />)
}
export default MyPostsContainer

