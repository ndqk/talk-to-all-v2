import * as types from '../constants/RoomConstant';

const initialState = null;

const RoomReducer = (state = initialState,action) => {
    switch(action.type){
        case types.UPDATE_ROOM_DATA:
            state = action.room;
            return state;
        case types.LEAVE_ROOM_RESPONSE:
            state = null;
            return state;
        case types.LOGOUT_REQUEST:
            state = null;
            return state;
        default:
            return state;
    }
}

export default RoomReducer;