import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {useForm} from "react-hook-form";


const MyPosts = (props) => {

    let postElements = props.post.map(p => <Post id={p.id} key={p.id} message={p.message} likes={p.likesCount}/>)
    
    const {
        register,
        handleSubmit,
        reset,
    } = useForm({

    })
    const onSubmit = (data) => {
        props.addPost(data.message)
        reset()
    }

    return (
        <div className={s.postsBlock}>
            <h3> my posts</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <textarea placeholder={'enter yo masage'} {...register('message')}/>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </form>
            <div className={s.posts}>
                {postElements}
            </div>
            </div>
    )
}
export default MyPosts

