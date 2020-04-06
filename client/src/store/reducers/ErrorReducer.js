import * as types from '../constants/ErrorConstant';

const initialState = {
    joinError : null,
    changePassError : null
};

const ErrorReducer = (state = initialState,action) => {
    switch(action.type){
        case types.GET_ERROR_RESPONSE:
            state = action.error;
            return state;
        case types.CLOSE_MODAL:
            return {
                ...state,
                joinError : null
            };
        default:
            return state;
    }
}

export default ErrorReducer;