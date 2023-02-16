
const ADD_MESSAGE = 'add-Message'
const UPDATE_NEW_MESSAGE_CHANGE = 'update-NewMessageChange'

let initialState = {
    dialogs: [
        {name: 'Maxim', id: '1'},
        {name: 'Xenia', id: '2'},
        {name: 'Danya', id: '3'},
        {name: 'Ivan', id: '4'},
        {name: 'Alexey', id: '5'},
        {name: 'ANAV', id: '6'},
    ],
    messages: [
        {message: 'I eat kittens >', id: '1'},
        {message: 'Ksutaaaaaaaaaaaaaaaa', id: '2'},
        {message: 'F', id: '3'},
        {message: 'oaoaoaoaoa', id: '4'},
        {message: 'MAKS!!!', id: '5'},
    ],
    nevMessageText: ''
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let mesText = state.nevMessageText
            return  {
                ...state,
                nevMessageText: '',
                messages: [...state.messages, {id: '6', message:mesText } ],
            }
        }
        case UPDATE_NEW_MESSAGE_CHANGE: {
            return  {
                ...state,
                nevMessageText: action.newText
            }
        }
        default:
            return state

    }
}
export let sendMessageChangeActionCreator = () => ({type: ADD_MESSAGE})
export let onMessageChangeActionCreator = (text) => ({newText: text, type: UPDATE_NEW_MESSAGE_CHANGE})

export default dialogsReducer;

