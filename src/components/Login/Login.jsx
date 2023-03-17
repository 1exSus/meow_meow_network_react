import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";


const Login = (props) => {

    return <div>
        <h1>LOGIN</h1>
        <LoginForm login={props.login} isAuth={props.isAuth}/>
    </div>
}

const mapStateToPropsFactory = (state) =>( {
    isAuth: state.auth.isAuth
})
export default connect(mapStateToPropsFactory, {login})(Login)