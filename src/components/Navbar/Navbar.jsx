import React from "react";
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile' style={({isActive}) => ({color: isActive ? 'red' : 'blueviolet'})}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/dialogs' style={({isActive}) => ({color: isActive ? 'red' : 'blueviolet'})}>Message</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/users' style={({isActive}) => ({color: isActive ? 'red' : 'blueviolet'})}>Users</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/news' style={({isActive}) => ({color: isActive ? 'red' : 'blueviolet'})}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/music' style={({isActive}) => ({color: isActive ? 'red' : 'blueviolet'})}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/setting' style={({isActive}) => ({color: isActive ? 'red' : 'blueviolet'})}>Setting</NavLink>
            </div>
        </nav>
    )
}
//className={({ isActive }) =>isActive ? Css.activeLink : undefined
export default Navbar

