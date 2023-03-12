import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";


class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8`).then(response => {
            this.props.setUserProfile(response.data)
        });

    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToPropsFactory = (state) => ({

    profile: state.profilePage.profile

});

export default connect(mapStateToPropsFactory, {setUserProfile})(ProfileContainer)

