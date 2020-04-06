import * as types from '../constants/AlertSuccessConstant';

const initialState = {
    changePassSuccess : null,
    changeNameSuccess : null,
    changeAvataSuccess : null
}

const AlertSuccessReducer = (state = initialState,action) => {
    switch(action.type){
        case types.RESPONSE_SUCCESS:
            state = action.alert;
            return state;
        case types.CLOSE_MODAL:
            return {
                ...state,
                changeAvataSuccess : null,
                changeNameSuccess : null,
                changePassSuccess : null
            }
        default:
            return state;
    }
}

export default AlertSuccessReducer;