import * as types from '../constants/SignUpConstant';

const initialState = {
    error : false
}

const SignUpReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN_RESPONSE:
            return{
                ...state,
                error : action.res.error
            }
        case types.LOGOUT_REQUEST:
            return{
                ...state,
                error : false
            }
        default:
            return state;
    }
}

export default SignUpReducer;