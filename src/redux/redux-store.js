import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})



let store = legacy_createStore(reducers);
window.store = store;


export default store