import React from "react";
import p from './Post.module.css'

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src="https://sun9-77.userapi.com/impg/HvygLLgwGCN1Abk1ib2qJZnki3OS0srCKw7NSQ/9yQJKjJJ74I.jpg?size=640x640&quality=96&sign=4de7c7b71ea77e69ef7aa7da5020980c&type=album" alt=""/>
            {props.message}
            <div>
                <span>like {props.likes}</span>
            </div>

        </div>
    )
}
export default Post

