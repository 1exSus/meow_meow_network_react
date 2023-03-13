import {usersAPI} from "../api/API";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [
    ],
    currentPage: 1,
    pageSize: 5,
    totalUserCount: 0,
    isFetching: true,
    followingProgress: [],
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
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state

    }
}
export let followSuccess = (userId) => ({type: FOLLOW, userId})
export let unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export let setUsers = (users) => ({type: SET_USERS, users})

export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let setTotalUsers = (currentUsers) => ({type:SET_TOTAL_USERS, currentUsers })

export  let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export  let toggleIsFollowingProgress = (isFetching, userId ) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export const getUsers = (currentPage,pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage,pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsers(data.totalCount))
    });
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true,userId))
    usersAPI.follow(userId)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false,userId))
        });
}
export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true,userId))
    usersAPI.follow(userId)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false,userId))
        });
}
export default usersReducer;

