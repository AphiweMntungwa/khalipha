import { FETCH_SEARCH_REQ, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_ERROR } from "../actionConstants";
import axios from "axios";

export const fetchSearchReq = () => {
    return {
        type: FETCH_SEARCH_REQ
    }
}
export const fetchSearchSuccess = result => {
    return {
        type: FETCH_SEARCH_SUCCESS,
        payload: result
    }
}
export const fetchSearchError = error => {
    return {
        type: FETCH_SEARCH_ERROR,
        payload: error
    }
}

export const searchThunk = (queryStr) => {
    return (dispatch) => {
        dispatch(fetchSearchReq());
        axios.get(`http://khalipha.herokuapp.com/search/${queryStr}`)
            .then((res) => {
                dispatch(fetchSearchSuccess(res.data))
            })
            .catch((e) => {
                dispatch(fetchSearchError(e.message))
                console.log("error on search call", e)
            });
    }
}