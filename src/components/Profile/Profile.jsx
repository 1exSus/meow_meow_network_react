import React from "react";
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.post} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
        </div>
    )
}
export default Profile

