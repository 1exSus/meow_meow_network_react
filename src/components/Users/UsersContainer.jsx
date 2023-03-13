import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {
    follow, getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reducer";


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber,this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
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
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingProgress={this.props.followingProgress}
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
        followingProgress: state.usersPage.followingProgress,
    }
}

export default connect(mapStateToPropsFactory, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
})(UsersContainer)