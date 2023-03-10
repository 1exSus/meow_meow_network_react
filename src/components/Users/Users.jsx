import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div className = {styles.usersPage}>
            {
                this.props.users.map(u => <div key={u.id}>
                    <img src={u.photos.small != null ? u.photos.small :userPhoto} className={styles.userPhoto} alt=""/>
                    <div>
                        {u.followed
                            ? <button onClick={() => {this.props.unfollow(u.id)}}>Follow</button>
                            : <button onClick={() => {this.props.follow(u.id)}}>Unfollow</button>}
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