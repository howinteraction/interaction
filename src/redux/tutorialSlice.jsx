import { createSlice } from "@reduxjs/toolkit";

const tutorialSlice = createSlice({
  name: "tutorial",
  initialState: {
    isCleared: false,
  },
  reducers: {
    setIsCleared: (state, action) => {
      state.isCleared = action.payload;
    },
  }
});

export const { setIsCleared } = tutorialSlice.actions;
export default tutorialSlice.reducer;
