import React from "react";
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile

