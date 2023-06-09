import {
    USERS_FOLLOW, USERS_FOLLOWING_IN_PROGRESS,
    USERS_IS_LOADING,
    USERS_SET,
    USERS_SET_CURRENT_PAGE,
    USERS_SET_TOTAL_COUNT,
    USERS_UNFOLLOW
} from './actionTypes';
import {UserType} from '../../types/usersPageTypes';

export type UsersActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof setUsersLoadingAC>
    | ReturnType<typeof setUsersFollowingAC>

export const followAC = (userId: number) => ({
    type: USERS_FOLLOW,
    payload: {
        userId
    }
} as const)

export const unFollowAC = (userId: number) => ({
    type: USERS_UNFOLLOW,
    payload: {
        userId
    }
} as const);

export const setUsersAC = (users: UserType[]) => ({
    type: USERS_SET,
    payload: {
        users
    }
} as const);

export const setCurrentPageAC = (currentPage: number) => ({
    type: USERS_SET_CURRENT_PAGE,
    payload: {
        currentPage
    }
} as const);

export const setTotalUserCountAC = (totalUsersCount: number) => ({
    type: USERS_SET_TOTAL_COUNT,
    payload: {
        totalUsersCount
    }
} as const);

export const setUsersLoadingAC = (isLoading: boolean) => ({
    type: USERS_IS_LOADING,
    payload: {
        isLoading
    }
} as const)

export const setUsersFollowingAC = (userId: number, isFetching: boolean) => ({
    type: USERS_FOLLOWING_IN_PROGRESS,
    payload: {
        userId,
        isFetching
    }
} as const)