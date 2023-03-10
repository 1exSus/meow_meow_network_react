import React from "react";
import p from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

    return (
        <div className={p.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} userId={props.userId}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile

