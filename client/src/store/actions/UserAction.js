import * as types from '../constants/UserConstant';
import {socket} from '../socketio-api';

export const getUserRequest = () => () => {
    let userID = localStorage.getItem('userID');
    if(userID){
        socket.emit(types.GET_USER_REQUEST,userID);
    }
}

export const getUserResponse = () => dispatch => {
    socket.on(types.GET_USER_RESPONSE,res => {
        dispatch({
            type : types.GET_USER_RESPONSE,
            res
        })
    })
}

export const changePasswordRequest = (userID,currPass,newPass) => () => {
    socket.emit(types.CHANGE_PASSWORD_REQUEST,userID,currPass,newPass)
}

export const changeFullnameRequest = (userID,newFullname) => () => {
    socket.emit(types.CHANGE_FULLNAME_REQUEST,userID,newFullname);
}

export const changeAvataRequest = (userID,newAvata) => () => {
    socket.emit(types.CHANGE_AVATA_REQUEST,userID,newAvata)
}