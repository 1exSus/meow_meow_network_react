import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'


let Users = (props) => {

        let pagesCount = Math.ceil(props.totalUserCount/props.pageSize)
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
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt=""/>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}
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