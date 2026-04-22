import {configureStore} from '@reduxjs/toolkit'
import CartReducer from '../features/CartSlice'
export let store = configureStore({
    reducer:{
        HoleCart : CartReducer
    }
})