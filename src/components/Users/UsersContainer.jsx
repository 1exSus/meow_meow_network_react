import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToPropsFactory = (state) => {
    return  {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsers: (totalUserCount) => {
            dispatch(setTotalUsersAC(totalUserCount))
        },
    }
}

const UsersContainer = connect(mapStateToPropsFactory, mapDispatchToPropsFactory)(Users)

export default UsersContainer