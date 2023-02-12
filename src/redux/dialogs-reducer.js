
const ADD_MESSAGE = 'add-Message'
const UPDATE_NEW_MESSAGE_CHANGE = 'update-NewMessageChange'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: '6',
                message: state.nevMessageText,
            }
            state.messages.push(newMessage)
            state.nevMessageText = '';
            return state
        case UPDATE_NEW_MESSAGE_CHANGE:
            state.nevMessageText = action.newText;
            return state
        default:
            return state
    }
}
export let sendMessageChangeActionCreator = () => ({type: ADD_MESSAGE})
export let onMessageChangeActionCreator = (text) => ({newText: text, type: UPDATE_NEW_MESSAGE_CHANGE})

export default dialogsReducer;

