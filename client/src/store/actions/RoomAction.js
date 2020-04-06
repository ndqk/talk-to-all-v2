import * as types from '../constants/RoomConstant';
import {socket} from '../socketio-api';

export const createRoomRequest = (roomName,userID) => () => {
    socket.emit(types.CREATE_ROOM_REQUEST,roomName,userID);
}


export const leaveRoomRequest = (userID,roomID) => () => {
    socket.emit(types.LEAVE_ROOM_REQUEST,userID,roomID);
}

export const leaveRoomResponse = () => dispatch => {
    socket.on(types.LEAVE_ROOM_RESPONSE,res => {
        dispatch({
            type : types.LEAVE_ROOM_RESPONSE
        })
   })
}

export const joinRoomRequest = (userID,roomID) => () => {
    socket.emit(types.JOIN_ROOM_REQUEST,userID,roomID);
}

export const updateRoomData = () => dispatch => {
    socket.on(types.UPDATE_ROOM_DATA,room => {
        dispatch({
            type : types.UPDATE_ROOM_DATA,
            room
        })
    })
}

export const sendMessage = (roomID,message) => () => {
    socket.emit(types.SEND_MESSAGE,roomID,message);
}
