import { FETCH_SEARCH_REQ, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_ERROR } from "../actionConstants";

const initialState = {
    loading: false,
    searchResults: '',
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_SEARCH_REQ:
            return {...state, loading: true }
        case FETCH_SEARCH_SUCCESS:
            return {...state, loading: false, searchResults: payload, error: '' }
        case FETCH_SEARCH_ERROR:
            return {...state, loading: false, error: payload }

        default:
            return state
    }
}