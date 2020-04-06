import * as types from '../constants/LoginConstant';

const userID = localStorage.getItem('userID');
const initialState = {
    userID : userID ? userID : '',
    error : false
}

const LoginReducer = (state = initialState,action) => {
    switch(action.type){
        case types.LOGIN_RESPONSE:
            localStorage.setItem('userID',action.res.userID)
            return{
                ...state,
                userID : action.res.userID,
                error : action.res.error
            }
        case types.LOGOUT_REQUEST:
            localStorage.removeItem('userID');
            return {
                ...state,
                userID : '',
                error : false
            }
        default : 
            return state;
    }
}

export default LoginReducer;