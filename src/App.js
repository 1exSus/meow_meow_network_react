import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogContainer from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {
    return (
        <div className='app'>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer />} />
                        <Route path='/dialogs/*' element = {<DialogContainer/>} />
                        <Route path='/users' element = {<UsersContainer/>} />
                        <Route path='/news' element = {<News/>} />
                        <Route path='/Music' element = {<Music/>} />
                        <Route path='/setting' element = {<Setting/>} />
                        <Route path='/login' element = {<Login/>} />
                    </Routes>
                </div>
            </div>
            </div>
    );
}
export default App;
