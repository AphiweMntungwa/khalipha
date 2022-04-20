import { FETCH_PROVINCE_REQ, FETCH_PROVINCE_SUCCESS, FETCH_PROVINCE_ERROR } from "../actionConstants";
import axios from "axios";

export const fetchProvinceReq = () => {
    return {
        type: FETCH_PROVINCE_REQ
    }
}
export const fetchProvinceSuccess = provinces => {
    return {
        type: FETCH_PROVINCE_SUCCESS,
        payload: provinces
    }
}
export const fetchProvinceError = error => {
    return {
        type: FETCH_PROVINCE_ERROR,
        payload: error
    }
}
export const provinceThunk = (name) => {
    return (dispatch, getState) => {
        dispatch(fetchProvinceReq());
        axios.post('http://localhost:3001/South Africa/province', { name }) //"http://khalipha.herokuapp.com/South Africa/province"
            .then((res) => {
                const prv = res.data.country[0].provinces.filter(el =>
                    el.name.toUpperCase() === res.data.province
                )
                dispatch(fetchProvinceSuccess(prv))
            })
            .catch((e) => {
                dispatch(fetchProvinceError(e.message))
                console.log("error on province call", e)
            });
    }
}