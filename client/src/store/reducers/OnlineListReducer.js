import * as types from '../constants/OnlineListConstant';

const initialState = [];

const OnlineListReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_ONLINE_LIST_RESPONSE:
            state = action.res;
            return state;
        default:
            return state;
    }
}

export default OnlineListReducer