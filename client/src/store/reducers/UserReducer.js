import * as types from '../constants/UserConstant';

const initialState = {};

const UserReducer = (state = initialState,action) => {
    switch(action.type){
        case types.GET_USER_RESPONSE:
            state = action.res;
            return state;
        case types.LOGOUT_REQUEST:
            state = {};
            return state
        default:
            return state;
    }
}

export default UserReducer;