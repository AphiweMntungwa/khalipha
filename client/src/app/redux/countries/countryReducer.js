import { FETCH_COUNTRY_REQ, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_ERROR } from "../actionConstants";

const initialState = {
    loading: false,
    country: '',
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COUNTRY_REQ:
            return {...state, loading: true }
        case FETCH_COUNTRY_SUCCESS:
            return {...state, loading: false, country: payload, error: '' }
        case FETCH_COUNTRY_ERROR:
            return {...state, loading: false, error: payload }

        default:
            return state
    }
}