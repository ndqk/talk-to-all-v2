import * as types from '../constants/ErrorConstant';
import {socket} from '../socketio-api';

export const getErrorResponse = () => dispatch => {
    socket.on(types.GET_ERROR_RESPONSE, error => {
        dispatch({
            type : types.GET_ERROR_RESPONSE,
            error
        })
    })
}