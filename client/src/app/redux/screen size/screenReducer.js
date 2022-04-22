import { LARGE_WINDOW_SIZE, SMALL_WINDOW_SIZE } from "../actionConstants"

const initialState = {
    largeWindow: false
}

export default (state = initialState, { type, token }) => {
    switch (type) {

        case LARGE_WINDOW_SIZE:
            return {...state, largeWindow: token || !state.largeWindow }
        case SMALL_WINDOW_SIZE:
            return {...state, largeWindow: false }

        default:
            return state
    }
}