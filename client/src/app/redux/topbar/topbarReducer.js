import { TOGGLE_BURGER } from "../actionConstants";

const initialState = {
    toggler: true
}

const topbarReducer = (state = initialState, { type }) => {
    switch (type) {
        case TOGGLE_BURGER:
            return {
                ...state,
                toggler: !state.toggler
            }

        default:
            return state;
    }
}

export default topbarReducer;