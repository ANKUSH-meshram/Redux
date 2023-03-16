import { createSlice } from "@reduxjs/toolkit";

export const incDecSlice = createSlice({
    name: 'incDec',
    initialState: 10,
    reducers: {
        Inc: (state, action) => {
            return state += action.payload;
        },
        Dec: (state, action) => {
            return state -= action.payload;
        }
    }
})

export const {Inc, Dec} = incDecSlice.actions;
export default incDecSlice.reducer;