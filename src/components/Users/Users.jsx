import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {Navigate, NavLink} from "react-router-dom";

let Users = (props) => {

        let pagesCount = Math.ceil(props.totalUserCount/props.pageSize)
        let pages = []
        for (let i = 1; i <= 10; i++) {
            pages.push(i)
        }

    if(props.isAuth === false) return  <Navigate  to={'/login'} />

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
                            ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            :
                            <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
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