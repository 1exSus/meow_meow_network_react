import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/preloader/Preloader";





class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {

        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        });
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
            />
        </>
    }
}


let mapStateToPropsFactory = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        isFetching: state.usersPage.isFetching,
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
        toggleIsFetching: (IsFetching) => {
            dispatch(toggleIsFetchingAC(IsFetching))
        }
    }
}

export default connect(mapStateToPropsFactory, mapDispatchToPropsFactory)(UsersContainer)