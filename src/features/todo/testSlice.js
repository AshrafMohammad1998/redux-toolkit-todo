import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false
}

const loginSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        toggleLogin : (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    }
})

export const {toggleLogin} = loginSlice.actions

export default loginSlice.reducer
