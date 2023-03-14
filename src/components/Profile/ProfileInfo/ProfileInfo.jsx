import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            {/*<img*/}
            {/*     src={'https://catherineasquithgallery.com/uploads/posts/2021-03/1614643004_91-p-fon-dlya-fotoshopa-kota-105.jpg'}*/}
            {/*     alt=""*/}
            {/*/>*/}
            <div className={s.descriptionBlock}>
                <div>
                    {
                            props.profile.photos.large === null
                            ? <img className={s.profileIMG}
                                   src={'https://sun9-70.userapi.com/impg/N7VsNVXqsARf1aBIWsCfm-YUIIh9oOWrFdTC5A/1gCr9tcU65c.jpg?size=1080x1080&quality=95&sign=75ad3539dd95e019330e67c8b593fcca&type=album'}
                                   alt=""
                            />
                            : <img className={s.profileIMG}
                                   src={props.profile.photos.large}
                                   alt=""
                            />
                    }


                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>


            </div>
        </div>
    )
}
export default ProfileInfo

