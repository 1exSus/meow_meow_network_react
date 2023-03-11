const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [

    ],
    currentPage: 1,
    pageSize: 5,
    totalUserCount: 0,
    isFetching: true,
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}  
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS: {
            return {...state, totalUserCount: action.currentUsers}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state

    }
}
export let followAC = (userId) => ({type: FOLLOW, userId})
export let unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export let setUsersAC = (users) => ({type: SET_USERS, users})

export let setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let setTotalUsersAC = (currentUsers) => ({type:SET_TOTAL_USERS, currentUsers })

export  let toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default usersReducer;

