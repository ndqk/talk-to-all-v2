import * as types from '../constants/AlertSuccessConstant';
import { socket } from '../socketio-api';

export const getAlertResponse = () => dispatch => {
    socket.on(types.RESPONSE_SUCCESS, alert => {
        dispatch({
            type : types.RESPONSE_SUCCESS,
            alert
        })
    })
}