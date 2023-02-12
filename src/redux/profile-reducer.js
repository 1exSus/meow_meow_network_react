const ADD_POST = 'add-Post'
const UPDATE_NEW_POST_CHANGE ='update-New-Post-Change'
const profileReducer = (state, action) =>{

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '3',
                message: state.newPostText,
                likesCount: '0',
            }
            state.post.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_CHANGE:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}
export let addPostActionCreator = () => ({type: ADD_POST})
export let onPostChangeActionCreator = (text) => ({newText: text, type: UPDATE_NEW_POST_CHANGE})
export default profileReducer;