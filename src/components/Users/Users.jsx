import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalUserCount)
        });
    }
    onPageChanged = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
        this.props.setCurrentPage(pageNumber)
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount/this.props.pageSize)
        let pages = []

        for (let i = 1; i <= 10; i++) {
            pages.push(i)
        }

        return <div className={styles.usersPage}>
            <div className={styles.currentPageStyleBlock}>
                {pages.map(p =>{
                   return <span className={p === this.props.currentPage && styles.currentPageStyle}
                    onClick={() => this.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt=""/>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}


export default Users