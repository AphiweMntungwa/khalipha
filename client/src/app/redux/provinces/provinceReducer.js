import { FETCH_PROVINCE_REQ, FETCH_PROVINCE_SUCCESS, FETCH_PROVINCE_ERROR }
from "../actionConstants"


const initialState = {
    loading: false,
    province: '',
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_PROVINCE_REQ:
            return {...state, loading: true }
        case FETCH_PROVINCE_SUCCESS:
            return {...state, loading: false, province: payload, error: '' }
        case FETCH_PROVINCE_ERROR:
            return {...state, loading: false, error: payload }

        default:
            return state
    }
}