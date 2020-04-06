import * as types from '../constants/FriendConstant';

const initialState = {
    searchFriend : [],
    listFriend : [],
    friendRequests : []
}

const FriendReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH_FRIEND_RESPONSE:
            return {
                ...state,
                searchFriend : action.data
            }
        case types.GET_LIST_FRIEND_RESPONSE:
            return {
                ...state,
                listFriend : action.list
            }
        case types.GET_LIST_FRIEND_REQUEST_RESPONSE:
            return {
                ...state,
                friendRequests : action.list
            }
        case types.ACCEPT_FRIEND_REQUEST_REQUEST:
            let tmp = state.friendRequests.slice();
            tmp.splice(tmp.indexOf(action.to),1);
            return {
                ...state,
                friendRequests : tmp
            }
        case types.CLOSE_MODAL:
            return {
                ...state,
                searchFriend : [],
                listFriend : [],
                friendRequests : []
            }
        default:
            return state;
    }
}

export default FriendReducer