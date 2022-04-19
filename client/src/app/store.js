import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import topbarReducer from './redux/topbar/topbarReducer';
import modeReducer from './redux/darkmode/modeReducer';
import provinceReducer from './redux/provinces/provinceReducer';
import countryReducer from './redux/countries/countryReducer';
import searchReducer from './redux/search/searchReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';


export const store = configureStore({
    reducer: {
        topbar: topbarReducer,
        mode: modeReducer,
        provinces: provinceReducer,
        country: countryReducer,
        search: searchReducer
    },
    devTools: { logger, thunk }
});