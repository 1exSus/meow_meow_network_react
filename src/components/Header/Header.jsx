import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props) => {

    return (
        <header className={s.header}>
            <div className={s.headerImg}>
                <img src="https://sun9-77.userapi.com/impg/HvygLLgwGCN1Abk1ib2qJZnki3OS0srCKw7NSQ/9yQJKjJJ74I.jpg?size=640x640&quality=96&sign=4de7c7b71ea77e69ef7aa7da5020980c&type=album" alt=""/>
            </div>
            <div className={s.headerTitle}><img src="https://sun9-42.userapi.com/impg/BNI4Zide4C-6W2Guspk-Tm6bjxiVbGAmgSmcOg/COzx_GnOfaU.jpg?size=780x185&quality=96&sign=d2a31aead74688bcdc0da85eed16987b&type=album" alt=""/>
                {props.auth ? <div className={s.authLogin}>{props.login}</div>: <NavLink to={'/Login'}><div className={s.login}>Login</div></NavLink>}
            </div>
        </header>
    )
}
export default Header

