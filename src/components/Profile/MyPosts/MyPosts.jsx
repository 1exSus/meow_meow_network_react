import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'


const MyPosts = (props) => {

    let postElements = props.post.map(p => <Post id={p.id} key={p.id} message={p.message} likes={p.likesCount}/>)

    let newPostElement = React.createRef()
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value
        props.onPostChange(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3> my posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts

