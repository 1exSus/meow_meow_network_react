import React from "react";
import {connect} from "react-redux";
import Users from './Users'
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToPropsFactory = (state) => {
    return  {
        users: state.usersPage.users
    }
}
let mapDispatchToPropsFactory = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToPropsFactory, mapDispatchToPropsFactory)(Users)

export default UsersContainer