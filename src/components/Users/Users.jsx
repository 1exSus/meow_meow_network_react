import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";



let Users = (props) => {

        let follow-unfollow apipagesCount = Math.ceil(props.totalUserCount/props.pageSize)
        let pages = []
        for (let i = 1; i <= 10; i++) {
            pages.push(i)
        }

        return <div className={styles.usersPage}>
            <div className={styles.currentPageStyleBlock}>
                {pages.map(p =>{
                   return <span className={p === props.currentPage && styles.currentPageStyle}
                    onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
               props.users.map(u => <div key={u.id}>
                   <div>
                       <NavLink to={'/profile/'+u.id}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt=""/>
                       </NavLink>
                   </div>

                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY" : "89068660-bedd-4d79-b650-5a8eaa38ad97"
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode === 0){
                                            props.unfollow(u.id)
                                        }
                                    });
                            }}>Unfollow</button>
                            :
                            <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                            "API-KEY" : "89068660-bedd-4d79-b650-5a8eaa38ad97"
                        }
                        })
                            .then(response => {
                            if(response.data.resultCode === 0){
                            props.follow(u.id)
                        }
                        });
                        }}>Follow</button>}
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </div>)
            }
        </div>
}

export default Users