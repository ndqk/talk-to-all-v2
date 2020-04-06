import * as types from '../constants/ModalConstant'

export const openModal = (NameModal,ContentModal) => {
    return {
        type : types.OPEN_MODAL,
        NameModal,
        ContentModal
    }
}

export const closeModal = () => {
    return {
        type : types.CLOSE_MODAL
    }
}

export const openPrevModal = () => {
    return {
        type : types.OPEN_PREV_MODAL
    }
}