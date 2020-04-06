import * as types from '../constants/ModalConstant'

const initialState = {
    isOpen : false,
    NameModal : [],
    ContentModal : []
}

const ModalReducer = (state = initialState, action) => {
    switch(action.type){
        case types.OPEN_MODAL:
            return {
                ...state,
                isOpen : true,
                NameModal : [
                    ...state.NameModal,
                    action.NameModal
                ],
                ContentModal : [
                    ...state.ContentModal,
                    action.ContentModal
                ]
            }
        case types.CLOSE_MODAL:
            return {
                ...state,
                isOpen : false,
                NameModal : [],
                ContentModal : []
            }
        case types.OPEN_PREV_MODAL:
            let tmpName = state.NameModal.slice();
            tmpName.pop();
            let tmpContent = state.ContentModal.slice();
            tmpContent.pop();
            return {
                ...state,
                NameModal : tmpName,
                ContentModal : tmpContent
            }
        default : 
            return state;
    }
}

export default ModalReducer;