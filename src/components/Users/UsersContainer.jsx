import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {follow, setCurrentPage, setTotalUsers, setUsers, toggleIsFetching, unfollow} from "../../redux/users-reducer";
    import {usersAPI} from "../../api/API";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsers(data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {

        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
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

export default connect(mapStateToPropsFactory, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    toggleIsFetching
})(UsersContainer)