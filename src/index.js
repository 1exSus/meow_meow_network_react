
import reportWebVitals from './reportWebVitals';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import store from "./redux/redux-store";


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                     store = {store}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})

//test2

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();