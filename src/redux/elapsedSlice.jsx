import { createSlice } from "@reduxjs/toolkit";

const elapsedTimeSlice = createSlice({
  name: "elapsedTimer",
  initialState: {
    elapsedTime: 0,
  },
  reducers: {
    setElapsedTime: (state, action) => {
      state.elapsedTime = action.payload;
    },
  },
});

export const { setElapsedTime } = elapsedTimeSlice.actions;
export default elapsedTimeSlice.reducer;
