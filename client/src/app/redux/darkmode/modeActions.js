import { TOGGLE_DARK_MODE } from "../actionConstants";


export const toggleDarkMode = payload => {
    return {
        type: TOGGLE_DARK_MODE,
        payload
    }
}