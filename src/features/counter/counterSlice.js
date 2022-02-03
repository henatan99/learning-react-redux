import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }, 
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
});

// action creaters are generated for each case reducer functions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;