import {configureStore} from '@reduxjs/toolkit';
import speechReducer from './speechToTextSlice';

export const store = configureStore({
    reducer: speechReducer,
});