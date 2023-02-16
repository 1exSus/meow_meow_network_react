const ADD_POST = 'add-Post'
const UPDATE_NEW_POST_CHANGE = 'update-New-Post-Change'


let initialState = {
    post: [
        {id: '1', message: 'post1', likesCount: '19'},
        {id: '2', message: 'post12', likesCount: '24'},
    ],
    newPostText: ''
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
        default:
            return state
    }
}
export let addPostActionCreator = () => ({type: ADD_POST})
export let onPostChangeActionCreator = (text) => ({newText: text, type: UPDATE_NEW_POST_CHANGE})
export default profileReducer;