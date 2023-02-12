import React from "react";

import s from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    return (
            <div>
                <img
                    src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614643004_91-p-fon-dlya-fotoshopa-kota-105.jpg"
                    alt=""
                />
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
    )
}
export default ProfileInfo

