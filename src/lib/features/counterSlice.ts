import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the interface for the counter state
interface CounterState {
  value: number;
}

// Initial state for the counter slice
const initialState: CounterState = {
  value: 0,
};

// Create the counter slice using Redux Toolkit's createSlice function
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Increment the counter value by 1
    increment: (state) => {
      state.value += 1;
    },
    // Decrement the counter value by 1
    decrement: (state) => {
      state.value -= 1;
    },
    // Increment the counter value by a specific amount
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the actions and reducer from the counter slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
