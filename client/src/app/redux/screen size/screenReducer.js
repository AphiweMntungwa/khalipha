import { LARGE_WINDOW_SIZE } from "../actionConstants"

const initialState = {
    largeWindow: false
}

export default (state = initialState, { type }) => {
    switch (type) {

        case LARGE_WINDOW_SIZE:
            return {...state, largeWindow: !state.largeWindow }

        default:
            return state
    }
}