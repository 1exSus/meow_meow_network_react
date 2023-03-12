const ADD_POST = 'add-Post'
const UPDATE_NEW_POST_CHANGE = 'update-New-Post-Change'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    post: [
        {id: '1', message: 'post1', likesCount: '19'},
        {id: '2', message: 'post12', likesCount: '24'},
    ],
    newPostText: '',
    profile: null,
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
        default:
            return state
    }
}
export let addPostActionCreator = () => ({type: ADD_POST})
export let onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_CHANGE, newText: text, })
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export default profileReducer;