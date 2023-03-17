
const ADD_MESSAGE = 'add-Message'
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
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let mesText = action.newMassageBody
            return  {
                ...state,
                newMassageBody: '',
                messages: [...state.messages, {id: '6', message:mesText } ],
            }
        }
        default:
            return state

    }
}
export let sendMessageChangeActionCreator = (newMassageBody) => ({type: ADD_MESSAGE, newMassageBody})


export default dialogsReducer;

