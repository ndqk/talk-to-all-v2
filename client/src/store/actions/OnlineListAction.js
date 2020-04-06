import * as types from '../constants/OnlineListConstant';
import {socket} from '../socketio-api';

export const getOnlineListRequest = (memberID) => () => {
    socket.emit(types.GET_ONLINE_LIST_REQUEST,memberID);
}

export const getOnlineListResponse = () => dispatch => {
    socket.on(types.GET_ONLINE_LIST_RESPONSE,res => {
        dispatch({
            type : types.GET_ONLINE_LIST_RESPONSE,
            res
        })
    })
}