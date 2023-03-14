import {profileAPI, usersAPI} from "../api/API";

const ADD_POST = 'add-Post'
const UPDATE_NEW_POST_CHANGE = 'update-New-Post-Change'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    post: [
        {id: '1', message: 'post1', likesCount: '19'},
        {id: '2', message: 'post12', likesCount: '24'},
    ],
    newPostText: '',
    profile: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '3',
                message: state.newPostText,
                likesCount: '0',
            }
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_CHANGE: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status }
        }
        default:
            return state
    }
}

export let addPostActionCreator = () => ({type: ADD_POST})
export let onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_CHANGE, newText: text, })
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export let setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
            dispatch(setStatus(status))
        }

    })
}



export default profileReducer;

