import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postElements = props.postData.map(p => <Post id={p.id} message={p.message} likes={p.likesCount}/>)

    let newPostElement = React.createRef()
    let addPost = () => {
        // props.addPost()
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value
        props.dispatch(onPostChangeActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3> my posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts

