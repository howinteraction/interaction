import { createSlice } from "@reduxjs/toolkit";

const stageSlice = createSlice({
  name: "stages",
  initialState: {
    stage: 0,
  },
  reducers: {
    setStage: (state, action) => {
      state.stage = action.payload;
    },
  },
});

export const { setStage } = stageSlice.actions;
export default stageSlice.reducer;
