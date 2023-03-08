import { configureStore } from "@reduxjs/toolkit";
import counterReduser from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReduser,
  }
})