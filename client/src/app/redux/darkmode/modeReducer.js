import { TOGGLE_DARK_MODE } from "../actionConstants"

const initialState = {
    darkMode: 0,
}

const modeReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: payload,
            }

        default:
            return state
    }
}

export default modeReducer;