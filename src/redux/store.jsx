import { configureStore } from "@reduxjs/toolkit";
import  globalData  from "./Slice";

export const store = configureStore({
    reducer: {
        Articles:globalData
    }
})