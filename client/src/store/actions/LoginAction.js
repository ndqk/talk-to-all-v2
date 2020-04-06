import * as types from '../constants/LoginConstant';
import {socket} from '../socketio-api';

export const loginRequest = (data) => () =>  {
    socket.emit(types.LOGIN_REQUEST,data);
}

export const loginResponse = () => dispatch => {
    socket.on(types.LOGIN_RESPONSE,res => {
        dispatch({
            type : types.LOGIN_RESPONSE,
            res
        })
    })
}

export const logoutRequest = () => {
    return {
        type : types.LOGOUT_REQUEST
    }
}