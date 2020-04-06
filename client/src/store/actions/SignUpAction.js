import * as types from '../constants/SignUpConstant';
import {socket} from '../socketio-api';

export const signUpRequest = (data) => () => {
    socket.emit(types.SIGN_UP_REQUEST,data);
}

export const signUpResponse = () => dispatch => {
    socket.on(types.SIGN_UP_RESPONSE,res => {
        dispatch({
            type : types.LOGIN_RESPONSE,
            res
        })
    })
}