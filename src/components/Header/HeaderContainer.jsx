import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

import {setUserData} from "../../redux/auth-reducer";
import axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true}).then(response => {
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data
                this.props.setUserData(id,email, login)
            }
        });

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


export default connect(mapStateToPropsFactory,{setUserData})(HeaderContainer)

