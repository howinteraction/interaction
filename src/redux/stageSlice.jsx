import { createSlice } from "@reduxjs/toolkit";

const stageSlice = createSlice({
  name: "stages",
  initialState: {
    stageLevel: 0,
  },
  reducers: {
    setStage: (state, action) => {
      state.stageLevel = action.payload;
    },
  },
});

export const { setStage } = stageSlice.actions;
export default stageSlice.reducer;
