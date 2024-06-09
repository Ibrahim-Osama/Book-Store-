import { configureStore } from "@reduxjs/toolkit";
import bookslice from "./bookslice";
import authslice from "./authslice";


export default configureStore(
    {
        reducer: 
        {
            bookslice,authslice
        }
    })