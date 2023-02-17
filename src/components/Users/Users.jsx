import React from "react";
import styles from './Users.module.css'
import {followAC, unfollowAC} from "../../redux/users-reducer";

const Users = (props) => {
    if (props.users.length === 0    ) {
        props.setUsers([
                {
                    photoURL: 'https://sun9-77.userapi.com/impg/HvygLLgwGCN1Abk1ib2qJZnki3OS0srCKw7NSQ/9yQJKjJJ74I.jpg?size=640x640&quality=96&sign=4de7c7b71ea77e69ef7aa7da5020980c&type=album',
                    name: 'Aleksey', id: '1', status: 'hey', followed: true, location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    photoURL: 'https://sun9-77.userapi.com/impg/HvygLLgwGCN1Abk1ib2qJZnki3OS0srCKw7NSQ/9yQJKjJJ74I.jpg?size=640x640&quality=96&sign=4de7c7b71ea77e69ef7aa7da5020980c&type=album',
                    name: 'Xenia', id: '2', status: 'hey-heu', followed: true, location: {city: 'Omsk', country: 'Russia'}
                },
                {
                    photoURL: 'https://sun9-77.userapi.com/impg/HvygLLgwGCN1Abk1ib2qJZnki3OS0srCKw7NSQ/9yQJKjJJ74I.jpg?size=640x640&quality=96&sign=4de7c7b71ea77e69ef7aa7da5020980c&type=album',
                    name: 'Ivan', id: '3', status: 'yo', followed: false, location: {city: 'Shanghai', country: 'China'}
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <img src={u.photoURL} className={styles.userPhoto} alt=""/>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Follow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Unfollow</button>}
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
            </div>)
        }
    </div>
}

export default Users