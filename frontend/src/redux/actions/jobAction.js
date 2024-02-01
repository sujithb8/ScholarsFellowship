import axios from 'axios';
import { toast } from 'react-toastify'
import {
    UNIV_LOAD_SUCCESS,
    UNIV_LOAD_FAIL,
    UNIV_LOAD_REQUEST,
    UNIV_LOAD_SINGLE_FAIL,
    UNIV_LOAD_SINGLE_REQUEST,
    UNIV_LOAD_SINGLE_SUCCESS,
    REGISTER_UNIV_FAIL,
    REGISTER_UNIV_REQUEST,
    REGISTER_UNIV_SUCCESS,
    UPDATE_UNIV_FAIL,
    UPDATE_UNIV_REQUEST,
    UPDATE_UNIV_SUCCESS,
    DELETE_UNIV_FAIL,
    DELETE_UNIV_REQUEST,
    DELETE_UNIV_SUCCESS,
    PROGRAM_LOAD_REQUEST,
    PROGRAM_LOAD_SUCCESS,
    PROGRAM_LOAD_FAIL
} from "../constants/jobconstant"


export const univLoadAction = (pageNumber, keyword = '', type = '', location = '') => async (dispatch) => {
    dispatch({ type: UNIV_LOAD_REQUEST });
    try {
        
    // const { data } = await axios.get(`/api/universities/?pageNumber=${pageNumber}&keyword=${keyword}&type=${type}&location=${location}`)
    const { data } = await axios.get("http://localhost:9000/api/universities")
        dispatch({
            type: UNIV_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: UNIV_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

// single univ action
export const univLoadSingleAction = (univ_id) => async (dispatch) => {
    dispatch({ type: UNIV_LOAD_SINGLE_REQUEST });
    try {
        // eslint-disable-next-line no-template-curly-in-string
        const { data } = await axios.get("http://localhost:9000/api/university/${univ_id}");
        dispatch({
            type: UNIV_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: UNIV_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}

// add univ action
export const registerUnivAction = (univ) => async (dispatch) => {
    dispatch({ type: REGISTER_UNIV_REQUEST })

    try {
        const { data } = await axios.post("http://localhost:9000/api/universities/create", univ)
        dispatch({
            type: REGISTER_UNIV_SUCCESS,
            payload: data
        })
        toast.success("Univ created successfully");


    } catch (error) {
        dispatch({
            type: REGISTER_UNIV_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);

    }
}

// add univ action
export const updateUnivAction = (univ) => async (dispatch) => {
    dispatch({ type: UPDATE_UNIV_REQUEST })

    try {
        const { data } = await axios.post("http://localhost:9000/universe/upd/:univ_id", univ)
        dispatch({
            type: UPDATE_UNIV_SUCCESS,
            payload: data
        })
        toast.success("Univ created successfully");


    } catch (error) {
        dispatch({
            type: UPDATE_UNIV_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);

    }
}

// add univ action
export const deleteUnivAction = (univ) => async (dispatch) => {
    dispatch({ type: DELETE_UNIV_REQUEST })

    try {
        const { data } = await axios.post("http://localhost:9000/api/universe/del/:id", univ)
        dispatch({
            type: DELETE_UNIV_SUCCESS,
            payload: data
        })
        toast.success("Univ created successfully");


    } catch (error) {
        dispatch({
            type: DELETE_UNIV_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);

    }
}


// single program action
export const programLoadAction = (univ_id,program_id) => async (dispatch) => {
    dispatch({ type: PROGRAM_LOAD_REQUEST });
    try {
        // eslint-disable-next-line no-template-curly-in-string
        const { data } = await axios.get("http://localhost:9000/api/${univ_id}/${program_id}");
        dispatch({
            type: PROGRAM_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PROGRAM_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}
