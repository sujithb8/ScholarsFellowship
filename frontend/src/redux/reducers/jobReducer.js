import {
    UNIV_LOAD_FAIL,
    UNIV_LOAD_REQUEST,
    UNIV_LOAD_RESET,
    UNIV_LOAD_SUCCESS,
    UNIV_LOAD_SINGLE_FAIL,
    UNIV_LOAD_SINGLE_REQUEST,
    UNIV_LOAD_SINGLE_RESET,
    UNIV_LOAD_SINGLE_SUCCESS,
    REGISTER_UNIV_FAIL,
    REGISTER_UNIV_REQUEST,
    REGISTER_UNIV_RESET,
    REGISTER_UNIV_SUCCESS,
    UPDATE_UNIV_FAIL,
    UPDATE_UNIV_REQUEST,
    UPDATE_UNIV_SUCCESS,
    UPDATE_UNIV_RESET,
    DELETE_UNIV_FAIL,
    DELETE_UNIV_REQUEST,
    DELETE_UNIV_RESET,
    DELETE_UNIV_SUCCESS,
} from "../constants/jobconstant"

//load single univ reducer
export const loadUnivReducer = (state = { univs: [] }, action) => {
    switch (action.type) {
        case UNIV_LOAD_REQUEST:
            return { loading: true }
        case UNIV_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueType: action.payload.setUniqueType,
                setUniqueLocation: action.payload.setUniqueLocation,
                univs: action.payload.univs
            }
        case UNIV_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case UNIV_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

// single univ reducer
export const loadUnivSingleReducer = (state = { univ: {} }, action) => {
    switch (action.type) {
        case UNIV_LOAD_SINGLE_REQUEST:
            return { loading: true }
        case UNIV_LOAD_SINGLE_SUCCESS:
            return {

                loading: false,
                success: action.payload.success,
                singleUniv: action.payload.univ,

            }
        case UNIV_LOAD_SINGLE_FAIL:
            return { loading: false, error: action.payload }
        case UNIV_LOAD_SINGLE_RESET:
            return {}
        default:
            return state;
    }

}

//Register univ reducer;
export const registerUnivReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_UNIV_REQUEST:
            return { loading: true }
        case REGISTER_UNIV_SUCCESS:
            return {
                loading: false,
                univ: action.payload,
            }
        case REGISTER_UNIV_FAIL:
            return { loading: false, error: action.payload }
        case REGISTER_UNIV_RESET:
            return {}
        default:
            return state;
    }

}

//update univ reducer;
export const updateUnivReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_UNIV_REQUEST:
            return { loading: true }
        case UPDATE_UNIV_SUCCESS:
            return {
                loading: false,
                univ: action.payload,
            }
        case UPDATE_UNIV_FAIL:
            return { loading: false, error: action.payload }
        case UPDATE_UNIV_RESET:
            return {}
        default:
            return state;
    }

}

//delete univ reducer;
export const deleteUnivReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_UNIV_REQUEST:
            return { loading: true }
        case DELETE_UNIV_SUCCESS:
            return {
                loading: false,
                univ: action.payload,
            }
        case DELETE_UNIV_FAIL:
            return { loading: false, error: action.payload }
        case DELETE_UNIV_RESET:
            return {}
        default:
            return state;
    }

}

// single program reducer
export const programLoadReducer = (state = { program: {} }, action) => {
    switch (action.type) {
        case UNIV_LOAD_SINGLE_REQUEST:
            return { loading: true }
        case UNIV_LOAD_SINGLE_SUCCESS:
            return {

                loading: false,
                success: action.payload.success,
                programLoad: action.payload.program,

            }
        case UNIV_LOAD_SINGLE_FAIL:
            return { loading: false, error: action.payload }
        case UNIV_LOAD_SINGLE_RESET:
            return {}
        default:
            return state;
    }

}