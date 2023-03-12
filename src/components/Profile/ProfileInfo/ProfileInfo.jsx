import React from "react";

import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }
debugger
    return (
            <div>
                <img className={s.profileIMG}
                    src={props.profile.photos.large}
                    alt=""
                />
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
    )
}
export default ProfileInfo

