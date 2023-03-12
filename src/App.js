import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/ProfileContainer";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogContainer from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <div className='app'>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element = {<ProfileContainer/>} />
                        <Route path='/dialogs/*' element = {<DialogContainer/>} />
                        <Route path='/users' element = {<UsersContainer/>} />
                        <Route path='/news' element = {<News/>} />
                        <Route path='/Music' element = {<Music/>} />
                        <Route path='/setting' element = {<Setting/>} />
                    </Routes>
                </div>
            </div>
            </div>
    );
}
export default App;
