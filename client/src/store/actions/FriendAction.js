import * as types from '../constants/FriendConstant';
import {socket} from '../socketio-api';

export const searchFriend = (keyword) => dispatch => {
    socket.emit(types.SEARCH_FRIEND_REQUEST,keyword);
    socket.on(types.SEARCH_FRIEND_RESPONSE, data => {
        dispatch({
            type : types.SEARCH_FRIEND_RESPONSE,
            data
        })
    })
}

export const getListFriend = (listID) => dispatch => {
    socket.emit(types.GET_LIST_FRIEND_REQUEST,listID);
    socket.on(types.GET_LIST_FRIEND_RESPONSE,list => {
        dispatch({
            type : types.GET_LIST_FRIEND_RESPONSE,
            list
        })
    })
}

export const sendAddFriendRequest = (from, to) => dispatch => {
    socket.emit(types.SEND_ADD_FRIEND_REQUEST,from,to);
}

export const getListFriendRequest = (listID) => dispatch => {
    socket.emit(types.GET_LIST_FRIEND_REQUEST_REQUEST,listID);
    socket.on(types.GET_LIST_FRIEND_REQUEST_RESPONSE,list => {
        dispatch({
            type : types.GET_LIST_FRIEND_REQUEST_RESPONSE,
            list
        })
    })
}

export const acceptFriendRequest = (from,to) => dispatch =>{
    socket.emit(types.ACCEPT_FRIEND_REQUEST_REQUEST,from,to);
    dispatch({
        type : types.ACCEPT_FRIEND_REQUEST_REQUEST,
        to
    })
}

export const declineFriendRequest = (from,to) => dispatch => {
    socket.emit(types.DECLINE_FRIEND_REQUEST_REQUEST,from,to);
    dispatch({
        type : types.ACCEPT_FRIEND_REQUEST_REQUEST,
        to
    })
}