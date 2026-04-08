import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/CounterSlice'
import themeReducer from '../features/ThemeToggler/ToggleSlice'
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        themeChanger:themeReducer
    }
})