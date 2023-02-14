import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            post: [
                {id: '1', message: 'post1', likesCount: '19'},
                {id: '1', message: 'post12', likesCount: '24'},
            ],
            newPostText: ''
        },

        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}





window.store = store
export default store

