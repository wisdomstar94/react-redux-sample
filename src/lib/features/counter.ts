import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
export interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0
};

export const counter = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    initializeCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { 
  increment, 
  decrement, 
  incrementByAmount,
  initializeCount,
} = counter.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export const counterReducer = counter.reducer;
export default counterReducer;