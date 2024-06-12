import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/TodoSlice"
import loginReducer from "../features/todo/testSlice"

export const store = configureStore({
    reducer: {todoReducer, loginReducer}
})