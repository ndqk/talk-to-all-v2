import * as types from '../constants/MessagesConstant';

const initalState = {
    avata : [],
    message : [],
    fullname : []
}

const MessagesReducer =  (state = initalState,action) => {
    switch(action.type){
        default : 
            return state;
    }
}

export default MessagesReducer;