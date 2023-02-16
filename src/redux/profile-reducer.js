const ADD_POST = 'add-Post'
const UPDATE_NEW_POST_CHANGE ='update-New-Post-Change'


let initialState = {
    post: [
        {id: '1', message: 'post1', likesCount: '19'},
        {id: '2', message: 'post12', likesCount: '24'},
    ],
    newPostText: ''
}
const profileReducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '3',
                message: state.newPostText,
                likesCount: '0',
            }
            let StateCopy = {...state}
            StateCopy.post = [...state.post]
            StateCopy.post.push(newPost)
            StateCopy.newPostText = ''
            return StateCopy
        }
        case UPDATE_NEW_POST_CHANGE: {
            let StateCopy = {...state}
            StateCopy.newPostText = {...state.newPostText}
            StateCopy.newPostText = action.newText
            return StateCopy
        }
        default:
            return state
    }
}
export let addPostActionCreator = () => ({type: ADD_POST})
export let onPostChangeActionCreator = (text) => ({newText: text, type: UPDATE_NEW_POST_CHANGE})
export default profileReducer;