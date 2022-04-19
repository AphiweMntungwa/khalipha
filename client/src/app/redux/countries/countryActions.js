import { FETCH_COUNTRY_REQ, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_ERROR } from "../actionConstants";
import axios from "axios";

export const fetchCountryReq = () => {
    return {
        type: FETCH_COUNTRY_REQ
    }
}
export const fetchCountrySuccess = provinces => {
    return {
        type: FETCH_COUNTRY_SUCCESS,
        payload: provinces
    }
}
export const fetchCountryError = error => {
    return {
        type: FETCH_COUNTRY_ERROR,
        payload: error
    }
}

export const countryThunk = (name) => {
    return (dispatch) => {
        dispatch(fetchCountryReq());
        axios.get(`http://khalipha.herokuapp.com/${name}`)
            .then((res) => {
                const prv = res.data[0]
                dispatch(fetchCountrySuccess(prv))
            })
            .catch((e) => {
                dispatch(fetchCountryError(e.message))
                console.log("error on province call", e)
            });
    }
}