import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
         <Header {...this.props}/>
        )
    }
    }

    let mapStateToPropsFactory = (state) => ({
        auth: state.auth.isAuth,
        login: state.auth.login
    });

export default connect(mapStateToPropsFactory,{getAuthUserData, logout})(HeaderContainer)

