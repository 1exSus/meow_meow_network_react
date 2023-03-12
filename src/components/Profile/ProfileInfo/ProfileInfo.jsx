import React from "react";

import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return (
            <div>
                <img
                     src={'https://catherineasquithgallery.com/uploads/posts/2021-03/1614643004_91-p-fon-dlya-fotoshopa-kota-105.jpg'}
                     alt=""
                />
                <div className={s.descriptionBlock}>
                    <div>
                        <img className={s.profileIMG}
                             src={props.profile.photos.large}
                             alt=""
                        />
                    </div>

                    ava + description
                </div>
            </div>
    )
}
export default ProfileInfo

